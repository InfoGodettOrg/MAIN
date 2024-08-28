const express = require('express');
const app = express();
const articles = require('./articles.json'); // Make sure this path is correct

// Define a route to serve the articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
