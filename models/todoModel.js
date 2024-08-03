const pool = require('../config/db');

// Create a new todo
const createTodo = async (userId, text) => {
    try {
        const query = `INSERT INTO todos (user_id, text) VALUES ($1, $2) RETURNING id, text`;
        const result = await pool.query(query, [userId, text]);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating todo:', error);
        throw new Error('Error creating todo');
    }
};

// Get all todos for a specific user
const getTodosByUser = async (userId) => {
    try {
        const query = `SELECT * FROM todos WHERE user_id = $1`;
        const result = await pool.query(query, [userId]);
        return result.rows; // Return all rows for the user
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw new Error('Error fetching todos');
    }
};

// Update an existing todo
const updateTodo = async (id, text) => {
    try {
        const query = `UPDATE todos SET text = $1 WHERE id = $2 RETURNING id, text`;
        const result = await pool.query(query, [text, id]);
        if (result.rows.length === 0) {
            throw new Error('Todo not found');
        }
        return result.rows[0];
    } catch (error) {
        console.error('Error updating todo:', error);
        throw new Error('Error updating todo');
    }
};

// Delete a todo
const deleteTodo = async (id) => {
    try {
        const query = `DELETE FROM todos WHERE id = $1 RETURNING id`;
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0) {
            throw new Error('Todo not found');
        }
        return result.rows[0];
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw new Error('Error deleting todo');
    }
};

module.exports = { createTodo, getTodosByUser, updateTodo, deleteTodo };
