import express from 'express'
console.log(express)

const app=express()

app.get('/hello',(req,res) => {
    res.send('Hello!!')
})

app.listen(8080)
