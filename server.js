var http = require('http');
function onRequest(request,response){
    response.writeHeader(200,{'Content-Type':'text/plain'});
    response.write('Server Created');
    response.end();
}

http.createServer(onRequest).listen(8000);