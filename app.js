const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;  

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><h1>Hello World, is it November?</h1>')
})


app.get('/show', (req, res) => {

    // res.sendFile('index.html');

    res.sendFile('index.html' , { root : __dirname});


})

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})