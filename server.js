const express = require("express")
const port = 5000 || process.env.PORT

const app = express()

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res) =>{
    console.log(req.query)
    res.send(`<html><head><title>Data Eraser</title></head><body><h1>Data sent</h1><div><p>Thank You ${req.query.firstName} <br/> Your request is being processed</p></div></body>`)
})

app.post('/',(req,res) =>{
    console.log(req.body)
    res.send(`<html><head><title>Data Eraser</title></head><body><h1>Data sent</h1><div><p>Thank You ${req.query.firstName} <br/> Your request is being processed</p></div></body>`)
})

app.listen(port, (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(`Working on port ${port}`)
})