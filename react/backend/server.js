import express from "express";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
try {
  await client.connect();
  console.log("Connected");
} catch (error) {
  console.error("FAIL");
}

app.post("/data", async (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length == 0 || req.body == undefined) {
    res.send("the body cant be empty");
  }
  const data = req.body;
  try {
    const results = await client.query(
      "INSERT INTO json_store(data) VALUES ($1) RETURNING id",
      [data]
    );
    console.log("ID of the row", results);
    res
      .status(200)
      .send({ "Content-type": "application/json", message: "Date stored " });
  } catch (error) {
    console.error("Error in inserting", error);
  }
});

app.get("/data", async (req, res) => {
  const { id } = req.query;
  const { accept } = req.headers || req.query;

  const { rows } = await client.query(`SELECT * FROM json_store WHERE id=$1`, [
    id,
  ]);
  if (rows.length > 0) {
    res.type("html");
    res
      .status(200)
      .send({ "Content-type": "application-type/json", message: rows[0].data });
    return;
  }
  res.status(404).send({ "Content-type": "text", message: "not found" });
});

app.put("/data/:id", async (req, res) => {
  // const { id } = req.params;
  const { id } = req.query;
  console.log("🚀 -----------🚀");
  console.log("🚀 ~ id:", id);
  console.log("🚀 -----------🚀");
  const body = req.body;
  const query = "UPDATE json_store SET data = $1 WHERE id = $2 RETURNING *";
  try {
    const { rows } = await client.query(query, [body, id]);
    console.log("🚀 ---------------🚀");
    console.log("🚀 ~ rows:", rows);
    console.log("🚀 ---------------🚀");
    console.log(rows[0].data);
    res.status(200).send({ message: "updated" });
  } catch (error) {
    console.error("Something went wrong while updating", error);
    res.status(500).send({ message: "not updated" });
  }
});

app.delete("/data/:id", async (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM json_store WHERE id=$1 RETURNING *";
  try {
    const { rows } = await client.query(query, [id]);
    console.log("🚀 ---------------🚀");
    console.log("🚀 ~ rows:", rows[0].data);
    console.log("🚀 ---------------🚀");
    res
      .status(200)
      .send({ message: "delete successfully", data: rows[0].data });
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).send({ message: "delete unsuccessfully" });
  }
});

app.listen(3000, () => {
  console.log("Connect successfully");
});
