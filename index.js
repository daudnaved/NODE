const express = require('express')
const app = express()

app.get('',(req,res)=>{
    console.log('data Sent by browser',req.query.name)
    res.send('Welcome to this Page '+ req.query.name)
})
app.get('/aboutus',(req,res)=>{
    res.send('This is your About us Page')
})

app.listen(4500)