/*
  Warnings:

  - The `admin` column on the `atendente` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN');

-- AlterTable
ALTER TABLE "atendente" DROP COLUMN "admin",
ADD COLUMN     "admin" "ROLE";
