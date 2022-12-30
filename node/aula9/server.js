const express = require('express')
const app =  express()
const routes = require('./routes')

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

app.use(express.urlencoded({extended: true}))
app.use(routes)
app.listen(3000)