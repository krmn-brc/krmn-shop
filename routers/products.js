const express = require('express');
const { getAllProducts, addNewProduct } = require('../controllers/products');

const routers = express.Router();

routers.get('/',  getAllProducts)
routers.post('/', addNewProduct)

module.exports = routers;

