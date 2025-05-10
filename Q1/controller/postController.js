const { Post, User } = require("../models");

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, UserId: req.params.userId });
  res.json(post);
};

exports.getUserPosts = async (req, res) => {
  const user = await User.findByPk(req.params.userId, { include: [Post] });
  res.json(user ? user.Posts : []);
};

exports.updatePost = async (req, res) => {
  await Post.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Post updated" });
};

exports.deletePost = async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.json({ message: "Post deleted" });
};
