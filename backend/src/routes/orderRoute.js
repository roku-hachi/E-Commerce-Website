const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/order/add", authMiddleware.authMiddleware, orderController.order);
router.get("/order", authMiddleware.authMiddleware, orderController.getOrder);
router.get(
  "/order/:id",
  authMiddleware.authMiddleware,
  orderController.getOrderById,
);

module.exports = router;
