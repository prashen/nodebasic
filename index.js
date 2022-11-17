/**
 * 1- http module, writing head/status and server creating
 * 2- self module creation
 * 3- using write and getting url
 * 4- url module and query param ex- http://localhost:8080/mybirthday/?year=2017&month=feb
 * 5- 
 */
var http = require('http');
var url = require('url');
var myModule = require('./myfirstModule');

http.createServer(function (req, res) {
  // query string
  res.writeHead(200, {'Content-Type': 'text/html'})
  // it will write in browser
  res.write(req.url);

  // example with url
  var q = url.parse(req.url, true).query;
  console.log(q.year, q.month);


  res.end(`Hello world. my birthday is ${q.year}, ${q.month}. ${myModule.myDateTime()}`)
}).listen(8080);