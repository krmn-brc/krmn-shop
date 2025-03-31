const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
     name:{
        type:String,
        required:[true, 'Kategori adı boş bırakılamaz'],
        minlength:[3, 'Kategori adı minimum 3 karakter olmalı'],
        unique: true
     },
     createdAt:{
        type:Date,
        default:Date.now
     },
     updatedDate:{
       type:Date
     },
     products:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Product'
        }
     ]
})

module.exports = mongoose.model('Category', CategorySchema)