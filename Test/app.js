const express = require('express')
const app = express()
app.use(express.json())
const log = (req,res,next)=>{
console.log(req.body)
console.log(Date.now())
}
app.use(log)
app.get('/',(req,res)=>{
res.send(`<h1>Minha home</h1>`)
})

app.listen(3001,()=>{
console.log('Servidor iniciado') 
})

