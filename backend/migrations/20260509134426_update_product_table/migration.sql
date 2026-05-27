/*
  Warnings:

  - Made the column `sale` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `sale` INTEGER NOT NULL DEFAULT 0,
    MODIFY `id_user` INTEGER NOT NULL DEFAULT 1,
    MODIFY `id_category` INTEGER NOT NULL DEFAULT 1,
    MODIFY `id_brand` INTEGER NOT NULL DEFAULT 1;
