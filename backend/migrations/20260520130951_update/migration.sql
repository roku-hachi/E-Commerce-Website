/*
  Warnings:

  - You are about to drop the column `user_id` on the `Blog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Blog` DROP FOREIGN KEY `Blog_user_id_fkey`;

-- DropIndex
DROP INDEX `Blog_user_id_fkey` ON `Blog`;

-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `user_id`;
