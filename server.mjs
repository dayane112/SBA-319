// Import
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';


// setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001


// DB connection
connectDB();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


// routes



// listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})