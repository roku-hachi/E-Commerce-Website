const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

router.post("/brand/add", brandController.createBrand);
router.get("/brand/list", brandController.getBrand);
router.get("/brand/:id", brandController.getBrandById);
router.put("/brand/update/:id", brandController.updateBrand);
router.delete("/brand/delete/:id", brandController.deleteBrand);

module.exports = router;
