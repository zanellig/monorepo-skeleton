import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing environment variable: DATABASE_URL");
}

export const db = drizzle(connectionString, {
  schema,
  mode: "default",
});

export { schema };
