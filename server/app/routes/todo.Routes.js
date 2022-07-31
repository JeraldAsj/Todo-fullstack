/** @format */
const todo_express = require("express");
const todo_router = todo_express.Router();
const todoController = require("../controllers/todo.controller");

todo_router.get("/", todoController.index);
todo_router.get("/get/:id", todoController.single);
todo_router.get("/status", todoController.status);
todo_router.post("/", todoController.store);
todo_router.put("/update/:id", todoController.store);
todo_router.put("/updateByStatus/:id", todoController.updateByStatus);
todo_router.delete("/delete/:id", todoController.delete);
todo_router.delete("/deletebystatus", todoController.deleteByStatus);

module.exports = todo_router;
