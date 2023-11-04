const express = require('express');
const jwt = require('jsonwebtoken');
const  mongoose  =  require('mongoose')
const User = require('../models/Customer');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email,phone, password } = req.body;
    // Check if the username already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Return an error response if the username is already in use
      return res.status(400).json({ error: 'Username already exists' });
    }

    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});


// POST route for user login and generating JWT token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign({ email }, secretKey);
  res.json({ token });
});

// Middleware for JWT authentication
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Protected POST route that requires authentication
router.post('/api/resource', authenticateToken, (req, res) => {
  // You can access the authenticated user with req.user
  res.json({ message: 'This is a protected route', user: req.user });
});



module.exports = router;