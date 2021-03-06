const path = require('path')
const express = require('express')
const app = express()

const PORT_NUMBER = 8080

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/templates/mymap.html'));
})

app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

app.listen(8080, function () {
  console.log('Example app listening on port ' + PORT_NUMBER + ' !')
})
