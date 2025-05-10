require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sql2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// امتحان کردن اتصال
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
module.exports = sequelize;
