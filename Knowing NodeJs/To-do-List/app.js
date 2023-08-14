const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const log = (req,res,next)=>{
  console.log(req.body)
  console.log(Date.now())
  next()
}

app.use(log)

app.get('/',(req, res)=>{
  res.send(`<h1>Minha lista de tarefas</h1>`)
})

app.get('/json',(req,res)=>{
  res.json({name:'Lavar a louça', done:true})
})

app.listen(port,()=>{
  console.log('Servidor iniciado')
})