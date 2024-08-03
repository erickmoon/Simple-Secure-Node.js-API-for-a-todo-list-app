const express = require('express');
const dotenv  = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const pool  = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()  => console.log(`Server running on port ${PORT}`));
