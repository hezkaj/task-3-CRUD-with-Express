const express = require('express')
const app = express()
const port = 3000
const router = require('./router');

app.use('/users',router);
if (app.path()!='/users?'){
  app.all('*',(req,res)=>{res.end('Over page...')})
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})