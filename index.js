const express = require('express')
const app = express()
//let port = process.env.PORT || 3000;
let port = process.argv[2] || 3000;

app.use(express.static(__dirname + '/public'))

//app.get('/', function (req, res)  {
  //res.send('Hello World')
//})

 
app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}`)