const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (data) => {
  return prisma.user.create({ data });
};

const getUser = async () => {
  return prisma.user.findMany();
};

const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

const getUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      cart: {
        include: {
          cart_items: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });
};

const updateUser = async (id, data) => {
  return prisma.user.update({
    where: {
      id: id,
    },
    data,
  });
};

const deleteUser = async (id) => {
  return prisma.user.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
