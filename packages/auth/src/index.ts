import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@finance-tracker-trpc/db";
import * as schema from "@finance-tracker-trpc/db/schema/auth";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "mysql",
		schema: schema,
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
	},
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
});
