const Product = require('../models/product')
const asyncErrorWrapper = require('../helpers/errors/errorWrapper')

const getAllProducts = asyncErrorWrapper(async (req, res, next)=>{
     const  data =  await Product.find();
     res.status(200)
     .json({
        data:data,
        success:true
     })
})

const addNewProduct = asyncErrorWrapper(async (req, res, next)=>{
    const newProduct =  req.body

    const product = await Product.create({
        ...newProduct
    })

    res.status(200)
    .json({
        message:`${product.name} isimli ürün eklendi`,
        success:true
    })
})


module.exports = {
    getAllProducts,
    addNewProduct
}