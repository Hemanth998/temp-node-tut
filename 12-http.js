const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Welcome to our page");
        return;
    }
    if(req.url === "/about"){
        res.end("About us");
        return;
    }
    res.end(
        `<h1>Oops!</h1>
        <p>404: requested page not found</p>
        <a href="/">back home</a>`
    )
})

server.listen(5000)