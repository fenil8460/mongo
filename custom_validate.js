// https://mongoosejs.com/docs/validation.html
 
const mongoose = require("mongoose");

const playlistschema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        unique:true,
        lowercase:true,
        trim:true, //remove space
        minlength : [2 , "minimum two letters"],
        maxlenthe : 30
    },
    ctype: {
        type : String,
        required : true,
        lowercase:true,
        enum:['frontend','backend','database']//fix string
    },
    videos:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error('videos count should not negative');
            }
        }

    },
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default :Date
    }
})