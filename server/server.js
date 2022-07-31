/** @format */

const express = require("express");
const cors = require("cors");
const con = require("./app/models/db");
const todoRoutes = require("./app/routes/todo.Routes");

const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};

// connecting route to database
app.use(function (req, res, next) {
  req.con = con;
  next();
});

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Todo server." });
});

app.use("/api/v1/todo", todoRoutes);

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
