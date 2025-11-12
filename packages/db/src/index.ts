import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;
let clientInstance: ReturnType<typeof postgres> | null = null;

function assertEnv(): string {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing environment variable: DATABASE_URL");
  }
  return connectionString;
}

/**
 * Helper for direct client access if needed
 */
export function getPostgresClient() {
  if (!clientInstance) {
    clientInstance = postgres(assertEnv(), { prepare: false });
  }
  return clientInstance;
}

export function getDb() {
  if (!dbInstance) {
    dbInstance = drizzle(getPostgresClient(), { schema });
  }
  return dbInstance;
}

export { schema };
