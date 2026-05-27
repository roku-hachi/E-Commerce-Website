/*
  Warnings:

  - A unique constraint covering the columns `[user_id,product_id]` on the table `Wishlist` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Wishlist` DROP FOREIGN KEY `Wishlist_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Wishlist` DROP FOREIGN KEY `Wishlist_user_id_fkey`;

-- DropIndex
DROP INDEX `Wishlist_product_id_key` ON `Wishlist`;

-- DropIndex
DROP INDEX `Wishlist_user_id_key` ON `Wishlist`;

-- CreateIndex
CREATE UNIQUE INDEX `Wishlist_user_id_product_id_key` ON `Wishlist`(`user_id`, `product_id`);

-- AddForeignKey
ALTER TABLE `Wishlist` ADD CONSTRAINT `Wishlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Wishlist` ADD CONSTRAINT `Wishlist_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
