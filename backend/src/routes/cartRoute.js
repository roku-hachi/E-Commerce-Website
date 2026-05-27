const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/cart/add",
  authMiddleware.authMiddleware,
  cartController.addToCart,
);
router.put(
  "/cart/update/:id",
  authMiddleware.authMiddleware,
  cartController.updateQuantity,
);
router.get("/cart", authMiddleware.authMiddleware, cartController.getCart);
router.delete(
  "/cart/delete/:id",
  authMiddleware.authMiddleware,
  cartController.deleteItem,
);

module.exports = router;
