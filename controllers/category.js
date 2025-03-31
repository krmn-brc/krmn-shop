const Category = require("../models/category")
const asyncErrorWrapper = require('../helpers/errors/errorWrapper')

const getAllCategories = asyncErrorWrapper(async(req, res, next) =>{
    let categories = await Category.find();

    return res.status(200)
    .json(categories);
})

const addCategory = asyncErrorWrapper(async(req, res, next) =>{
    const formCategory = req.body
   
    const category = await Category.create({
        ...formCategory
    })

    res.status(200)
    .json({
        success : true,
        message : category
    });
})

const deleteCategory = asyncErrorWrapper(async (req, res, next) =>{
    const {id} = req.params;
    
    await Category.findByIdAndDelete(id);

    
    res.status(200)
    .json({
        success : true,
        data : {},
        message:'Category silindi.'
    });
})

const editCategory = asyncErrorWrapper(async (req, res, next) => {
    const {id} = req.params;
    const {name} = req.body;
    let category = await Category.findById(id)
    
    category.name = name
    category.updatedDate = new Date();
    category = await category.save();

    res.status(200)
    .json({
        success:true,
        message:'Kategori güncellendi',
        data:category
    })
})


module.exports = {
    getAllCategories,
    addCategory,
    deleteCategory,
    editCategory
}