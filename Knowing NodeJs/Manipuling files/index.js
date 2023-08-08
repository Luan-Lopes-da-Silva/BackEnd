const fs = require('fs')

console.log(__dirname)
fs.writeFile('test.txt','Olá NodeJs',err=>console.log(err))
fs.appendFile('test.txt',' Hello' , err=>console.log(err))
fs.rename('test.txt','test2.txt', err=>console.log(err))
fs.unlink('text.txt',err=>console.log(err))
