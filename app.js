const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
const url='mongodb://localhost/bookdb'
const app=express()
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',()=>
{    
    console.log("connected to database")
})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
const bookRouter=require('./router/books')
app.use('/books1',bookRouter),
app.listen(9000,()=>{
    console.log("server started")
})

