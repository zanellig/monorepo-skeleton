import { defineConfig } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing environment variable: DATABASE_URL");
}

export default defineConfig({
  schema: "./src/schema",
  out: "./src/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString,
  },
});
