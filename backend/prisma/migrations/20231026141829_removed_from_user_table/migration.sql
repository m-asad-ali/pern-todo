-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "todoId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
