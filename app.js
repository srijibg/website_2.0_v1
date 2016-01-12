var static = require('node-static');
var argv = require('minimist')(process.argv.slice(2));
var _ = require('underscore');

var file = new static.Server('./public');
var port = process.env.PORT || 8000;
if(_.contains(process.argv, '--dev')) { // by default force https, only when override use http
  port = 8080;
}

console.log("Starting HTTP server at port " + port);
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);
