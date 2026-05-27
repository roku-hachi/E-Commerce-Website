const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const order = async (req, res) => {
  const data = req.body;
  const user_id = req.user.id;

  const cart = await prisma.cart.findUnique({
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

  let total_price = 0;
  for (const product of cart.cart_items) {
    const price = product.product.sale_price || product.product.price;
    const subtotal = price * product.quantity;
    total_price += subtotal;
  }

  const order = await prisma.order.create({
    data: {
      total_price: total_price,
      ...data,
      user: {
        connect: {
          id: user_id,
        },
      },
    },
  });

  for (const product of cart.cart_items) {
    const price = product.product.sale_price || product.product.price;
    const subtotal = price * product.quantity;
    const orderItem = await prisma.orderItem.create({
      data: {
        quantity: Number(product.quantity),
        price: Number(price),
        subtotal: Number(subtotal),

        orders: {
          connect: {
            id: order.id,
          },
        },

        products: {
          connect: {
            id: product.product.id,
          },
        },
      },
    });
  }
  res.json({
    order,
    massage: "success!!",
  });
};

const getOrder = async (req, res) => {
  const order = await prisma.order.findMany({
    include: {
      user: true,

      order_items: {
        include: {
          products: true,
        },
      },
    },
  });
  res.json(order);
};

const getOrderById = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const order = await prisma.order.findMany({
    where: {
      user_id: user_id,
    },
  });
  res.json(order);
};

module.exports = {
  order,
  getOrder,
  getOrderById,
};
