const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../common/utils/file");

router.post(
  "/product/add",
  upload.uploadImage,
  productController.createProduct,
);
router.get("/product/search", productController.searchProduct);
router.get("/product/list", productController.getProduct);
router.get("/product/:id", productController.getProductById);
router.put(
  "/product/update/:id",
  upload.uploadImage,
  productController.updateProduct,
);
router.delete("/product/delete/:id", productController.deleteProduct);

module.exports = router;
