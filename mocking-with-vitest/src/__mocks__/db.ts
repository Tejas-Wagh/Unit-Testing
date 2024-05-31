import { PrismaClient } from '@prisma/client/edge'
import  {mockDeep}  from "vitest-mock-extended"

export const prisma = mockDeep<PrismaClient>();
