const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
console.log('Olá')
res.send()
})

router.post('/',(req,res)=>{
console.log(req.body)
res.status(200).json(req.body)  
})

router.get('/:id',(req,res)=>{
  console.log(req.params.id)
  res.send(`<h1>ID:${req.params.id}</h1>`)
})

router.put('/:id',(req,res)=>{
  console.log(req.params.id)
  res.send(`
  <h1>ID:${req.params.id}</h1>
  <p>O id sera atualizado</p>
  `)
})

router.delete('/:id',(req,res)=>{
  console.log(req.params.id)
  res.send(`
  <h1>ID:${req.params.id}</h1>
  <p>O id sera deletado</p>
  `)
})
  
module.exports = router