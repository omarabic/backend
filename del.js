var express = require('express')
var app = express()


const port = 8080;

app.listen(port,() => {
    console.log("app litening at",port)
})