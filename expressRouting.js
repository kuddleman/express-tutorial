const express = require('express')
const app = express()

//app object has a few methods;
//get--DEFAULT for all browsers -- read
//post -- create
//delete --delete
//put -- update

//all -- I will accept any HTTP verb/method

//these all take 2 args
// 1. path
// 2. callback to run if an HTTP request that matchs THIS verb is made
//    to the path in #1



app.get('/',(req, res)=>{
    console.log(req)
    res.send('<h1>Welcome to the home GET page</h1>')
})

app.post('/',(req, res)=>{
    res.send('<h1>Welcome to the home POST page</h1>')
})



app.listen(3000)
console.log("The server is listening on port 3000")