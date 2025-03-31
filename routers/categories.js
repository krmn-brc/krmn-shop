const express = require('express');
const { getAllCategories, addCategory, deleteCategory, editCategory } = require('../controllers/category');

const routers = express.Router();

routers.get('/', getAllCategories)
routers.post('/', addCategory)
routers.delete('/:id', deleteCategory)
routers.put('/:id', editCategory)


module.exports = routers;