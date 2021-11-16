import express from 'express';
import { products } from '../data/index.js';

const server = express.Router();
let brands = [];

server.get('/products', (req, res) => {
    res.status(200).send(products);
});

server.get('/product/:id', (req, res) => {
    const { id } = req.params;
    let findProduct = products.find(p => p.id === parseInt(id));
    res.status(200).json({product: findProduct});
});

server.post('/product', (req, res) => {
    products.push(req.body);
    res.status(200).json({products: products});
});


export default server;