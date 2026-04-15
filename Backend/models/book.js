const mongoose = require('mongoose');

//creating book schema--books records structure
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        //means this field should be mandetory to filled
        required:true,
    },
    author:String,
    year:Number,
    price:Number,
    
                  
});

module.exports=mongoose.model('Book',bookSchema);//can access this book model in other files by importing it and we can perform crud operations on this book model

