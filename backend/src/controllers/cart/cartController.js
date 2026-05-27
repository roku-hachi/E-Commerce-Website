const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addToCart = async (req, res) => {
  const data = req.body;
  const user_id = parseInt(req.user.id);

  let cart = await prisma.cart.findUnique({
    where: {
      user_id: user_id,
    },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        user: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }
  const existingItem = await prisma.cartItem.findFirst({
    where: {
      cart_id: cart.id,
      product_id: data.product_id,
    },
  });

  if (existingItem) {
    const update = await prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: Number(existingItem.quantity) + Number(data.quantity),
      },
    });

    return res.json(update);
  }

  const cartItem = await prisma.cartItem.create({
    data: {
      quantity: Number(data.quantity),

      cart: {
        connect: {
          id: cart.id,
        },
      },

      product: {
        connect: {
          id: data.product_id,
        },
      },
    },
  });

  return res.json(cartItem);
};

const updateQuantity = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { quantity } = req.body;

    const item = await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: Number(quantity),
      },
    });

    return res.json(item);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Update failed",
    });
  }
};

const getCart = async (req, res) => {
  const user_id = parseInt(req.user.id);
  let cart = await prisma.cart.findUnique({
    where: {
      user_id: user_id,
    },
    include: {
      cart_items: {
        include: {
          product: true,
        },
      },
    },
  });
  return res.json(cart);
};

const deleteItem = async (req, res) => {
  const id = parseInt(req.params.id);
  return prisma.cartItem.delete({
    where: {
      id: id,
    },
  });
  return res.json({
    massage: "deleted",
  });
};

module.exports = {
  addToCart,
  updateQuantity,
  getCart,
  deleteItem,
};
