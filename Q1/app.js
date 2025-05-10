const express = require("express");
const sequelize = require("./config/database");
const { User, Post } = require("./models");

const app = express();
app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(3000, () => console.log("Server running on port 3000"));
});
