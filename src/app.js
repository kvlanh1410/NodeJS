const express = require('express');
const path = require('path');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express')

})

app.get('/about', (req, res) => {
    
    if(!req.query.search){
        res.send('you must provide a search')
    }
    res.send('Welcome to about')
})


app.listen(3000, ()=>{
    console.log('Server is up on port 300')
})