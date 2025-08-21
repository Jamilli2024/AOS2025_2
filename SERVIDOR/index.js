const express = require('express')
const app = express()
const port = 8000

app.get('/' , (req, res)=>{
    res.send('<h1>Bem-vindo ao Express de Jamilli</h1>')
})

app.listen(port,()=> {
    console.log('Servidor iniciado com sucesso')
})

// import "dotenv/config";
// import express from "express";

// console.log("Olá, Turma!");
// console.log("MY_SECRET", process.env.MY_SECRET);
// console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);

// const app = express();

//app.get("/", (req, res) => {
  //res.send("Bem-vindo ao Express de Jamilli");
//});

//app.listen(3000, () => {
//  console.log("Example app listening on port 3000!");
//});