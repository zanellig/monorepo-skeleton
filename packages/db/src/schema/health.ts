import { pgTable, serial } from "drizzle-orm/pg-core";

export const health = pgTable("health", {
  id: serial().primaryKey(),
});
