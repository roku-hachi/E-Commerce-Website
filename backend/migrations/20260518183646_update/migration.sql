/*
  Warnings:

  - You are about to alter the column `status` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `payment_status` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `status` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `payment_status` BOOLEAN NOT NULL DEFAULT true;
