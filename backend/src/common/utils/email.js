const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const isValidEmail = (email) => {
  if (!email || typeof email !== "string") {
    return false;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email.trim());
};

const emailExists = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

module.exports = {
  isValidEmail,
  emailExists,
};
