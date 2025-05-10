const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userController");
const postCtrl = require("../controller/postController");

router.post("/", userCtrl.createUser);
router.get("/", userCtrl.getUsers);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

router.post("/:userId/posts", postCtrl.createPost);
router.get("/:userId/posts", postCtrl.getUserPosts);

module.exports = router;
