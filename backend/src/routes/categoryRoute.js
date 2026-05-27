const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/category/add", categoryController.createCategory);
router.get("/category/list", categoryController.getCategory);
router.get("/category/:id", categoryController.getCategoryById);
router.put("/catagory/update/:id", categoryController.updateCatagory);
router.delete("catagory/delete/:id", categoryController.deleteCategory);

module.exports = router;
