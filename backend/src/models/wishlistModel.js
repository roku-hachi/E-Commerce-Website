const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createWishlist = async (user_id, product_id) => {
  const existing = await prisma.wishlist.findFirst({
    where: {
      user_id,
      product_id,
    },
  });

  if (existing) {
    return existing;
  }

  return prisma.wishlist.create({
    data: {
      user: {
        connect: {
          id: user_id,
        },
      },

      products: {
        connect: {
          id: product_id,
        },
      },
    },

    include: {
      products: true,
    },
  });
};

const getWishlist = async (user_id) => {
  return prisma.wishlist.findMany({
    where: {
      user_id: user_id,
    },
    include: {
      products: true,
    },
  });
};

const deleteWishlist = async (id) => {
  return prisma.wishlist.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createWishlist,
  getWishlist,
  deleteWishlist,
};
