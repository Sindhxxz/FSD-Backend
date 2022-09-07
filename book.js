const mongoose=require('mongoose')
const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('book10',bookSchema)
