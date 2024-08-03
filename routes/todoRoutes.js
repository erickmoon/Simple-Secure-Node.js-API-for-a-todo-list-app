const express = require('express');
const { addTodo, getTodos, updateTodoItem, deleteTodoItem } = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/todos', authMiddleware, addTodo);
router.get('/todos', authMiddleware, getTodos);
router.put('/todos/:id', authMiddleware, updateTodoItem);
router.delete('/todos/:id', authMiddleware, deleteTodoItem);

module.exports = router;
