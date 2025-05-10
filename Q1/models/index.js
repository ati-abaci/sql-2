const User = require("./user");
const Post = require("./post");

User.hasMany(Post, { onDelete: "CASCADE" });
Post.belongsTo(User);

module.exports = { User, Post };
