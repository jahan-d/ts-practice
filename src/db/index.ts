import { neon } from "@neondatabase/serverless";
import config from "../config";

const databaseUrl = config.database_url;

if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL in config");
}

export const sql = neon(databaseUrl);

export const initDb = async () => {
  console.log("Initializing database...");
}