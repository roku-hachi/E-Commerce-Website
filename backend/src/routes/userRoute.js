const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../common/utils/file");

router.post("/user/add", upload.uploadAvatar, userController.createUser);
router.get("/user/list", userController.getUser);
router.get("/user/:id", userController.getUserById);
router.put("/user/update", userController.updateUser);
router.delete("/user/delete", userController.deleteUser);

module.exports = router;
