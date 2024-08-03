const express = require('express');
const dotenv  = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const pool  = require('./config/db');
const cors = require('cors'); //Cross origin middleware (Accept requests from  a different server)

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
}));
  
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()  => console.log(`Server running on port ${PORT}`));
