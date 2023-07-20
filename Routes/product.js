const express = require('express')
const router = express.Router()
const { read , list , create , update , remove } = require('../Controllers/product')

router.get('/product',list)
router.get('/product/:id',read)
router.post('/product',create)
router.put('/product/:id',update)
router.delete('/product/:id',remove)

module.exports = router


// router.get('/product',(req,res)=>{
//     res.send("Hello Product Endpoint")
// })
// router.post('/product',(req,res)=>{
//     res.send("Hello Post Endpoint")
// })
// router.put('/product',(req,res)=>{
//     res.send("Hello put Endpoint")
// })
// router.put('/product/:id',(req,res)=>{
//     res.send("Hello id put Endpoint")
// })
// router.delete('/product',(req,res)=>{
//     res.json({name:'peter',id:555})
// })