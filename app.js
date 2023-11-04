const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth");
const secretKey = process.env.JWT_SECRET; 

const dbUrl = process.env.DB_URL; // Assuming you have the MongoDB connection string in your .env file

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(bodyParser.json());
app.use('/', authRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
