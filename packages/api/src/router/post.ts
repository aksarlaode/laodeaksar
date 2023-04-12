import { clerkClient } from "@clerk/nextjs/api";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findFirst({ where: { id: input.id } });
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.create({
        data: { ...input, userId: ctx.auth.userId },
      });

      return post;
    }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.post.delete({ where: { id: input } });
  }),
  getMessage: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.auth.userId;

    const post = await ctx.prisma.post.findMany({
      where: {
        userId,
      },
      include: {
        message: true,
      },
    });

    return post.flatMap((item) => item.message);
  }),
  sendMessage: protectedProcedure
    .input(z.object({ message: z.string(), postId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const fromUser = await clerkClient.users.getUser(ctx.auth.userId);

      const message = await ctx.prisma.message.create({
        data: {
          fromUser: ctx.auth.userId,
          fromUserName: fromUser.username ?? "unknown",
          postId: input.postId,
          message: input.message,
        },
      });

      return message;
    }),
});
