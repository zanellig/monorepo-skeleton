import "dotenv/config";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "@packages/api/routers";
import { createContext } from "@packages/api/context";
import { auth } from "@packages/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());
app.use(
  "/*",
  cors({
    origin: (origin) => (origin === process.env.CORS_ORIGIN ? origin : "*"),
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext: (_opts, context) => {
      return createContext({ context });
    },
  })
);

export default app;
