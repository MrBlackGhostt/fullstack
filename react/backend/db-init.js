import pkg from "pg";
import dotenv from "dotenv";

const { Client } = pkg;

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connect Successfully");
    await client.query(
      "CREATE TABLE IF NOT EXISTS json_store(id SERIAL, data JSONB, created_at TIMESTAMP, updated_at TIMESTAMP)"
    );
    console.log("created the table");
  } catch (error) {
    console.error("Connection error", error);
  } finally {
    await client.end();
  }
}

connectDB();
