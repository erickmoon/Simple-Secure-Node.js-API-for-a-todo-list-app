const { createTodo, getTodosByUser, updateTodo, deleteTodo } = require('../models/todoModel');

const addTodo = async (req, res) => {
    const {text} = req.body;
    const userId = req.user.id;

    if(!text){
        return res.status(400).json({message: 'Text is required'});
    }
    if(!userId){
        return res.status(400).json({message: 'Login is required'});
    }

    const todo = await createTodo(userId, text);
    res.status(200).json(todo);
};

const getTodos = async (req, res) => {
    const userId = req.user.id;
    const todos = await getTodosByUser(userId);
    res.status(200).json(todos);
};

const updateTodoItem = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    if(!text){
        return res.status(400).json({message: "Text is required"});
    }

    const todo = await updateTodo(id, text);
    res.status(200).json(todo);
};

const deleteTodoItem = async (req, res) => {
    const {id} = req.params;

    const todo =  await deleteTodo(id);
    res.status(200).json(todo);
};

module.exports = { addTodo, getTodos, updateTodoItem, deleteTodoItem };