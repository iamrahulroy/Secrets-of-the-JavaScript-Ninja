// gives function reference to create express app
var express = require('express')

// creates an instance of an 'express app'
var app = express()

app.get('/', function(request, response) {
  response.send('Hello World Rahul')
})

app.get('/yo', function(request, response) {
  response.send('Yo yo Sonia my darling!')
})

app.use(express.static('public'))

var server = app.listen(3009, function() {
  console.log('Server running at http:localhost:' + server.address().port)
})
