const pool = require('../config/db');

const createUser = async (email, password) => {
    try {
        const query = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email`;
        const result = await pool.query(query, [email, password]);
        return result.rows[0];
    } catch (error) {
        throw new Error('Error creating user');
    }
};

const getUserByEmail = async (email) => {
    try {
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await pool.query(query, [email]);
        return result.rows[0];
    } catch (error) {
        throw new Error('Error fetching user');
    }
};

module.exports = { createUser, getUserByEmail };
