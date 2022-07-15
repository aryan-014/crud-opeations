const express = require("express")
const app = express()
const path = require('path')

const mongoose = require('mongoose')
const User = require('./Usermodel.js')

app.use(express.static('./public'))

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})


mongoose.connect('mongodb://localhost/temp_database',{useNewUrlParser:true})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
app.get('/user/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/register.html'))
})
app.get('/user/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/login.html'))
})

app.post('/auth/register',async(req,res)=>{
    await User.create(req.body,(error,user)=>{
        console.log(req.body)
        console.log(user)
        
        res.redirect('/')
    })
})


