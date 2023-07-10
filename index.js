
const express = require('express');

const bookRoutes = require('./routes/books');

const app = express();

app.use((request , response , next)=>
{
    response.setHeader('Access-Control-Allow-Origin' , "*");
    response.setHeader('Access-Control-Allow-Method' , "*");
    response.setHeader('Access-Control-Allow-Headers' , "*");
    next();
})

app.use(express.json());

app.use('/books', bookRoutes);

app.listen(9990 , ()=>
{
    console.log("Server started at 9990...");
})