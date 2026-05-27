/*
  Warnings:

  - You are about to alter the column `status` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - You are about to alter the column `payment_status` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    MODIFY `payment_status` VARCHAR(191) NOT NULL DEFAULT 'unpaid';
