var http = require('http');
var mod = require('./module1');
var fs = require('fs');
var app = require('./app');
function onRequest(request,response){
    response.writeHeader(200,{'Content-Type':'text/html'});
    // response.write('Server Created');
    // response.write(mod.myVar);
    // mod.myfun();
    fs.readFile('./webpage/first.html',null,function(error,data){
        if(error){
            response.writeHeader(404);
            response.write("File not found!!");
        }
        else{
            response.write(data);
        }
        response.end();
    });
    }
http.createServer(app.handleRequest).listen(8000);