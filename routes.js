const express = require('express');
const { getAllLists, addList, updateList, deleteList, getList } = require('./controllers/list');
const { getAllTodos, addTodo, updateTodo, deleteTodo } = require('./controllers/todo');

var router = express.Router();

router.get('/lists',getAllLists);
router.post('/list',addList)
router.post('/list/:listId',updateList)
router.get('/list/:listId',getList)
router.delete('/list/:listId',deleteList)
router.get('/todos',getAllTodos);
router.post('/todo',addTodo)
router.post('/todo/:todoId',updateTodo)
router.delete('/todo/:todoId',deleteTodo)
module.exports = router