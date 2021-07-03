const express = require('express')
const app = express()

// app comes with a 'use' method
// this is how you get to middleware

// use takes 1 arg right now: 1. the middleware you want to run

app.use(express.static('public'))


app.listen(3000)
console.log("Server listening on port 3000...")