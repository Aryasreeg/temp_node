var http = require('http');

var url = require('url');

var server = http.createServer(function(req,res) {
    //setting contentheader
    res.writeHead(200,("content Type","text/html"));
    var q =url.parse(req.url,true).query;
    var txt = q.year + ' '+ q.month;
    let data = 'the month and year is:'
    
    res.end(txt);
});

server.listen(8082);