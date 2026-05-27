const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const upload = require("../common/utils/file");

router.post("/blog/add", upload.uploadImage, blogController.createBlog);
router.get("/blog/list", blogController.getBlog);
router.get("/blog/:id", blogController.getBlogById);
router.put("/blog/update/:id", upload.uploadImage, blogController.updateBlog);
router.delete("/blog/delete/:id", blogController.deleteBlog);

module.exports = router;
