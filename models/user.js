const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
     firstName:{
        type:String,
        required:[true, 'Kullanıcı adı boş bırakılamaz.']
     },
     lastName:{
        type:String,
     },
     email:{
        type:String,
        required: true,
        unique : true,
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
     }
})

module.exports = mongoose.model('User', UserSchema)