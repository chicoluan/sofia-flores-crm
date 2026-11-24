/*
  Warnings:

  - You are about to drop the `Flower` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Flower";

-- CreateTable
CREATE TABLE "stockFlowers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "variety" TEXT,
    "category" TEXT NOT NULL,
    "color" TEXT,
    "unit" TEXT NOT NULL DEFAULT 'stem',
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "minQuantity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "costPrice" DOUBLE PRECISION NOT NULL,
    "sellingPrice" DOUBLE PRECISION NOT NULL,
    "supplierId" TEXT,
    "description" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stockFlowers_pkey" PRIMARY KEY ("id")
);
