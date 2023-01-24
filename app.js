const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;  

// set the view engine to ejs

app.set('view engine', 'ejs');


let myName = 'Barry'; 

app.get('/', (req, res) => {
//   res.send('<!DOCTYPE html><html lang="en"><h1>Hello World, is it November?</h1>')

// res.send(myName);

res.send(`<h3> Hi, ${ myName } </h3>`)

})

app.get('/show', (req, res) => {

    // res.sendFile('index.html');
    res.sendFile('index.html' , { root : __dirname});
})

app.get('/ejs', (req,res) => {

    //ejs stuff goes here. 

    // use res.render to load up an ejs view file
    res.render('index');

})

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})