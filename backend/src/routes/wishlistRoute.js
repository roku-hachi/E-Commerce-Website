const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const wishlistController = require("../controllers/wishlistController");

router.post(
  "/wishlist/add",
  authMiddleware.authMiddleware,
  wishlistController.createWishlist,
);
router.get(
  "/wishlist",
  authMiddleware.authMiddleware,
  wishlistController.getWishlist,
);
router.delete(
  "/wishlist/delete/:id",
  authMiddleware.authMiddleware,
  wishlistController.deleteWishlist,
);

module.exports = router;
