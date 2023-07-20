const mongoose = require('mongoose')

const connectDB =async ()=>{

    //d27saitunlu rdIXX920Qv2MBJNT  mongodb+srv://d27saitunlu:rdIXX920Qv2MBJNT@sever3001.lfrm7fg.mongodb.net/
    try {
        //await mongoose.connect('mongodb://127.0.0.1:27017/Peter3001')
        await mongoose.connect('mongodb+srv://d27saitunlu:rdIXX920Qv2MBJNT@sever3001.lfrm7fg.mongodb.net/Peter3001')
        console.log('DB Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB