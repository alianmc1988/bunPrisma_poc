/*
  Warnings:

  - You are about to drop the column `customerId` on the `Bar` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profiles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `staffType` to the `Staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'STAFF', 'SUPER_ADMIN');

-- DropForeignKey
ALTER TABLE "Bar" DROP CONSTRAINT "Bar_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profiles" DROP CONSTRAINT "Profiles_userId_fkey";

-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_profileId_fkey";

-- AlterTable
ALTER TABLE "Bar" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "type",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "staffType" "StaffType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Profiles";

-- DropEnum
DROP TYPE "ProfileType";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "barId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInBar" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "barId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInBar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_barId_key" ON "Profile"("barId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInBar_profileId_key" ON "ProfileInBar"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInBar_barId_key" ON "ProfileInBar"("barId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInBar" ADD CONSTRAINT "ProfileInBar_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInBar" ADD CONSTRAINT "ProfileInBar_barId_fkey" FOREIGN KEY ("barId") REFERENCES "Bar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
