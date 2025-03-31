const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Ürün adı boş bırakılamaz'],
        minlength:[3, 'Ürün adı minimum 3 karakter olmalıdır.']
    },
    categoryId:{
        type:mongoose.Schema.ObjectId,
        ref:'Category'
    },
    price:{
        type:Number,
        min:5,
        validate:function(value) {
            return value >= 5
        }
    },
    unitsInStock:{
        type:Number,
        min:1,
        validate: {
            validator: function(value) {
              return value >= 1;
            }
        }
    },
    image:{
        type:String,
        default:'default-image.png'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)