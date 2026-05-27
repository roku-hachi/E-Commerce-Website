const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCategory = async (data) => {
  return prisma.category.create({ data });
};

const getCategory = async () => {
  return prisma.category.findMany();
};

const getCategoryById = async (id) => {
  return prisma.category.findFirst({
    where: {
      id: id,
    },
  });
};

const updateCatagory = async (id, data) => {
  return prisma.category.update({
    where: {
      id: id,
    },
    data,
  });
};

const deleteCategory = async (id) => {
  return prisma.category.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createCategory,
  getCategory,
  getCategoryById,
  updateCatagory,
  deleteCategory,
};
