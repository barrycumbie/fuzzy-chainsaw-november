const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005;  

// set the view engine to ejs

app.set('view engine', 'ejs');


let myName = 'Nathan'; 

app.get('/', async (req, res) => {
//   res.send('<!DOCTYPE html><html lang="en"><h1>Hello World, is it November?</h1>')
// res.send(myName);

  let result = await res.send(`<h3> Hi, ${ myName } </h3>`);
  
  console.log( myName); 
  

})

app.get('/show', (req, res) => {

    // res.sendFile('index.html');
    res.sendFile('index.html' , { root : __dirname});
})

console.log("before app dot get to slash ejs", myName);

app.get('/ejs', async (req,res) => {

    //ejs stuff goes here. 

    console.log("in /ejs before render:", myName);

    // use res.render to load up an ejs view file
    res.render('index', { myName: myName } ); //left one is ejs, right side is node land
    console.log("after res render /ejs:", myName);
})

app.get('/name', (req,res) => {

  console.log("in get to slash name:", req.query.ejsFormName); 
  myName = req.query.ejsFormName; 
  
})

console.log("after app dot get to slash ejs", myName);

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})
