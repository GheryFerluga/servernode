const express = require('express')
const app = express()
let port = process.argv[3] || 3000;
 


console.log(process.argv)

if(process.argv[2]=== 'v'){

  console.log("My app version 1")

}

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}`)