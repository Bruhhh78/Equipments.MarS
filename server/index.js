const express = require('express');
const products = require('../server/products'); // Import the products array from your products file

const app = express();
const port = 3000;

// API endpoint to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API endpoint to get a single product by id
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/products`);
});
