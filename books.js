const express=require('express')
const book = require('../model/book')
const router=express.Router()
const book10=require('../model/book')
router.get('/',async(req,res)=>
{
    try{
        const books= await book10.find()
        res.json(books)
    }catch(err)
    {
        res.send('Error'+err)
    }
}
)
router.get('/:id',async(req,res)=>
{
    try{
        const books= await book10.find()
        res.json(books)
    }catch(err)
    {
        res.send('Error'+err)
    }
}
)
router.patch('/:id',async(req,res)=>
{
    try{
        const books=await book10.findById(req.params.id)
        books.sub=req.body.sub
        const a1=await books.save()
        res.json(a1)
    }
    catch(err){
        res.send('error')
    }
})

router.post('/',async(req,res)=>
{
const book=new book10(
    {
        title:req.body.title,
        name:req.body.name,
        author:req.body.author
    
    })
    try{
        const b2=await book.save()
        res.json(b2)
    }
    catch(err)
    {
        res.send('book not saved')
    }
})
module.exports=router
