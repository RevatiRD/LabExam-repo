const express = require('express');
const mysql = require('mysql');

const appForBook = express.Router();

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password: 'manager',
        database :'sdm'
    }
)

appForBook.get("/" , (request , response)=>
{
    var sql =  `select * from Book`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type" , "application/json");
            response.send(data);
        }
        else
        {
            response.setHeader("Content-Type" , "application/json");
            response.send(error);
        }
    })
})

appForBook.post("/" , (request , response)=>
{
    var sql =  `insert into Book values('${request.body.id}','${request.body.bname}','${request.body.author}','${request.body.book_type}','${request.body.price}','${request.body.publishDate}','${request.body.language}')`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type" , "application/json");
            response.send(data);
        }
        else
        {
            response.setHeader("Content-Type" , "application/json");
            response.send(error);
        }
    })
})

appForBook.put("/:id" , (request , response)=>
{
    var sql =  `update Book set price='${request.body.price}',language='${request.body.language}' where id = '${request.params.id}'`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type" , "application/json");
            response.send(data);
        }
        else
        {
            response.setHeader("Content-Type" , "application/json");
            response.send(error);
        }
    })
})

appForBook.delete("/:id" , (request , response)=>
{
    var sql =  `delete from Book where id = '${request.params.id}'`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type" , "application/json");
            response.send(data);
        }
        else
        {
            response.setHeader("Content-Type" , "application/json");
            response.send(error);
        }
    })
})

module.exports = appForBook;