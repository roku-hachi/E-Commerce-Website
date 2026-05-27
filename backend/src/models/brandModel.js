const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createBrand = async (data) => {
  return prisma.brand.create({ data });
};

const getBrand = async () => {
  return prisma.brand.findMany();
};

const getBrandById = async (id) => {
  return prisma.brand.findFirst({
    where: {
      id: id,
    },
  });
};

const updateBrand = async (id, data) => {
  return prisma.brand.update({
    where: {
      id: id,
    },
    data,
  });
};

const deleteBrand = async (id) => {
  return prisma.brand.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createBrand,
  getBrand,
  getBrandById,
  updateBrand,
  deleteBrand,
};
