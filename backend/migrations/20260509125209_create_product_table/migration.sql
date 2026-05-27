-- AlterTable
ALTER TABLE `Blog` MODIFY `image` JSON NULL;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `image` JSON NOT NULL,
    `sale` INTEGER NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 0,
    `id_user` INTEGER NOT NULL,
    `id_category` INTEGER NOT NULL,
    `id_brand` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
