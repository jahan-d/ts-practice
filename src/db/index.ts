import { neon } from "@neondatabase/serverless";
import config from "../config";

const databaseUrl = config.database_url;

if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL in config");
}

export const sql = neon(databaseUrl);

export const initDb = async () => {
    await sql`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(75) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        age INT NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'user',
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`
    await sql`CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        quantity INT NOT NULL CHECK (quantity > 0),
        food TEXT NOT NULL,
        
        price NUMERIC(10, 2) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`

  console.log("Initializing database...");
}