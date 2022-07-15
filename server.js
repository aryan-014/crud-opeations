const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

const BlogPost = require('./blogPostModel')

app.listen(3010,()=>{
    console.log('App listening on port 3010')
})
app.get('/',(req,res)=>{
    res.end('the home page')
})
app.get('/about',(req,res)=>{
    res.end('the about page')
})
app.get('/contact',(req,res)=>{
    res.end('the contact page')
})


mongoose.connect('mongodb://localhost/temp_database',{
    useNewUrlParser:true
})


//create data to database
BlogPost.create({
    title:"one life",
    body:"this is all about body"
},(error , blogpost)=>{
    console.log(blogpost)
})

//get data from database
//1. get all data
// BlogPost.find({},(error ,blogpost)=>{
//     console.log(blogpost)
// })

//2. find specific data

// BlogPost.find({title:"New morning"},(error ,blog)=>{
//     console.log(blog)
// })


//using wildcard operator

// BlogPost.find({title:/ing/},(err,blog)=>{
//     console.log(blog)
// })


//using unique id
// var id = "625ffd61d0f377338e52ad90"

// BlogPost.findById(id,(err,blog)=>{
//     console.log(blog)
// })

//3.Deleting records
// var id = "625ffd61d0f377338e52ad90"

// BlogPost.findByIdAndDelete(id,(err,blog)=>{
//     console.log("Deleted blog: "+blog)
// })


//4.Updating records
var id = "625ffe2a470e8cdc6db9f514"

BlogPost.findByIdAndUpdate(id,{
    title:"New updated title 2"
},(err,blog)=>{
    console.log("updating the blog: "+blog)
})





















// const server = http.createServer((req,res)=>{
//    if(req.url === '/'){
//        res.end('the home page')
//    }
//    if(req.url === '/contact'){
//        res.end('the contact page')
//    }
//    if(req.url === '/about'){
//        res.end('the about page')
//    }
//    else{
//        res.writeHead(404)
//        res.end('page  not found')
//    }
// })

// server.listen(3010)