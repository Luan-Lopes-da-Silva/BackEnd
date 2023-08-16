const express = require('express')
const app = express()
const port = 3000
const checkListRouter = require('./src/routes/checklist')
require('./config/database')

app.use(express.json())
app.use('/checklists', checkListRouter)

app.listen(port,()=>{
  console.log('Servidor iniciado')
})