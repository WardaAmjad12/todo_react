const mongoose = require("mongoose");
const listSchema = require("./schema/list");
const listModel = mongoose.model("lists", listSchema);
const todoSchema = require("./schema/todo");
const todoModel = mongoose.model("todos", todoSchema);

module.exports = {listModel, todoModel}