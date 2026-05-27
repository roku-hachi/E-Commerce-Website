const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProduct = async (data) => {
  return prisma.product.create({ data });
};

const getProduct = async (skip, limit) => {
  const products = await prisma.product.findMany({
    skip,
    take: limit,
  });
  const total = await prisma.product.count();

  return {
    products,
    total,
  };
};

const searchProduct = async (keyword) => {
  return prisma.product.findMany({
    where: {
      product_name: {
        contains: keyword,
      },
    },
  });
};

const getProductById = async (id) => {
  return prisma.product.findFirst({
    where: {
      id: id,
    },

    include: {
      brands: true,
      categorys: true,
    },
  });
};

const updateProduct = async (id, data) => {
  return prisma.product.update({
    where: {
      id: id,
    },
    data,
  });
};

const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createProduct,
  getProduct,
  searchProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
