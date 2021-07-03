const express = require('express')
const app = express()

//serve up static files!
app.use(express.static('public'))

app.all('/',(req, res)=>{
    //Express handles the headers
    res.send('<h1>This is the home page</h1>')
    //Express handles the end!
})

app.listen(3000)
console.log('The server is listening on port 3000....')

