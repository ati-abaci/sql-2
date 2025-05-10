const express = require("express");
const router = express.Router();
const postCtrl = require("../controller/postController");

router.put("/:id", postCtrl.updatePost);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
