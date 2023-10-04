import "server-only"
import { cache } from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const revalidate = 3600; // revalidate the data at most every hour

export const getItem = cache(async () => {
  const data = await prisma.post.findMany();
  return data;
});
