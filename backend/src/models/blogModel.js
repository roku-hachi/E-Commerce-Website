const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createBlog = async (data) => {
  return prisma.blog.create({ data });
};

const getBlog = async () => {
  return prisma.blog.findMany();
};

const getBlogById = async (id) => {
  return prisma.blog.findFirst({
    where: {
      id: id,
    },
  });
};

const updateBlog = async (id, data) => {
  return prisma.blog.update({
    where: {
      id: id,
    },
    data,
  });
};

const deleteBlog = async (id) => {
  return prisma.blog.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createBlog,
  getBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
