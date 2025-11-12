import { defineConfig } from "drizzle-kit";

import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "../../apps/server/.env" });
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing environment variable: DATABASE_URL");
}

export default defineConfig({
  schema: "./src/schema",
  out: "./src/migrations",
  strict: true,
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
});
