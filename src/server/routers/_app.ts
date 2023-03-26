import { z } from "zod";
import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";

const prisma = new PrismaClient();

export const appRouter = router({
  getAll: procedure.query(async () => {
    const tasks = await prisma.task.findMany();
    if (!tasks.length) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "No tasks were found",
      });
    }
    return tasks;
  }),
  create: procedure
    .input(
      z.object({
        title: z.string().min(3).max(255),
        content: z.string().min(3),
      })
    )
    .mutation(async ({ input }) => {
      const data = prisma.task.create({
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
