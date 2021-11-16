import express from 'express';
/* import { products } from '../data/index.js'; */
const server = express.Router();

let products = [
    {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

server.get('/products', (req, res) => {
    products = products.map( p => {
        p = {
            ...p, 
            price : `$${p.price}`
        } 
        return p });
        
    res.status(200).send(products);
});

server.get('/product/:id', (req, res) => {
    const { id } = req.params;
    let findProduct = products.find(product => product.id === parseInt(id));
    res.status(200).json({product: findProduct});
});

server.post('/product', (req, res) => {
    products.push(req.body);
    res.status(200).json({products: products});
});

server.put('/product/:id', (req, res) => {
    const { id } = req.params;
    let editProduct = products.find(product => product.id === parseInt(id));
    editProduct && (editProduct.name = "sarasa")
    res.status(200).send(editProduct ? "Nombre cambiado" : "No se encontro un producto");
});

server.delete('/product/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id !== parseInt(id));
    res.status(200).json(products);
})

export default server;