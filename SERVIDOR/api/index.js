import express from 'express'

const app = express()
const port = 3000

app.listen(port, ()=>{console.log('O Servidor está rodando')})
app.get("/", (req, res)=>{res.send("Bem vindo Express de Jamilli")})