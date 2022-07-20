// Node dependancies
const express = require('express');
const db = require("./config/connection");
const routes = require ('./routes');

// Server
const app = express()
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Start server
server.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`))