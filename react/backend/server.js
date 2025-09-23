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
    res.status(200).send("Inserting successfully", results);
  } catch (error) {
    console.error("Error in inserting", error);
  }
});

app.listen(3000, () => {
  console.log("Connect successfully");
});
