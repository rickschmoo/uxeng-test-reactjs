var express = require('express')
// var app = module.exports.app = exports.app = express();
var app = express();
// app.use(require('connect-livereload')());

// we are specifying the html directory as another public directory
app.use(express.static('./www'));

app.get('/', function (req, res) {
  res.send('Hello World 4!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('EXPRESS: UX ENG TEST WITH REACTJS listening at http://%s:%s', host, port)
  // test
  // test2
})