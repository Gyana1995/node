const http = require('http');
const   dataControle = (requ,resp)=>{
    resp.write('<h1>hi lipun chala</h1>');
    resp.end();
}
http.createServer(dataControle).listen(4500);