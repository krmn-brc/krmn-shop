const express = require('express');
const products = require('./products')
const categories = require('./categories')

const routers = express.Router();

routers.use('/products', products)
routers.use('/categories', categories)

module.exports = routers;