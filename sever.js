const express = require('express')
const { readdirSync } = require('fs')
const morgen = require('morgan') //middleware ไว้เช็ค reqส่งมา
const core = require('cors')
const bodyParse = require('body-parser')
const connectDB = require('./Configs/db')

// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

const app = express();
connectDB()

app.use(morgen('dev'))
app.use(core())
app.use(bodyParse.json({limit:'10mb'}))

readdirSync('./Routes')
     .map((r)=> app.use('/api',require('./Routes/'+ r)))

app.listen(3001,()=>console.log("sever is onport 3001"))

module.exports = app

//Route 1
// app.get('/product',(req,res)=>{
//     res.send("Hello Endpoint 555")
// })

//Route 2
// app.use('/api', productRouters)
// app.use('/api', authRouters)

//Route 3

//