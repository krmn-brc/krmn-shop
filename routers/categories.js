const express = require('express');
const { getAllCategories, addCategory, deleteCategory, editCategory } = require('../controllers/category');
const queryMiddleware = require('../middlewares/queries/queryMiddleware');
const Category = require('../models/category');

const routers = express.Router();

routers.get('/', queryMiddleware(Category, {
    searchKey:"name"
}), getAllCategories)


routers.post('/', addCategory)
routers.delete('/:id', deleteCategory)
routers.put('/:id', editCategory)


module.exports = routers;