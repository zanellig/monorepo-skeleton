import { getDb, schema } from "@packages/db";
import { protectedProcedure, publicProcedure, router } from "../index";

export const appRouter = router({
  health: router({
    db: publicProcedure.query(async () => {
      const res = await getDb().select().from(schema.health);
      return res;
    }),
  }),
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
});
export type AppRouter = typeof appRouter;
