const express = require('express')
const app = express()
const port = 3000
const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
const methodOverride = require('method-override')

require('./config/database')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method', {methods:['POST','GET']}))

app.use('/checklists', checkListRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks',taskRouter.simple)
app.use('/', rootRouter)


app.set('views',path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.listen(port,()=>{
  console.log('Servidor iniciado')
})