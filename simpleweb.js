let http = require('http');
let sever = http.createServer((req, res)=>{
    res.write(`<h1>Hello World</h1>`);
    res.end();
})
sever.listen(8888, 'localhost')