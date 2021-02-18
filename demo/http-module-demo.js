const http = require("http");
const fs = require('fs');
const path = require("path");


const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
            if (err) {
                throw err;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });
    } else if (req.url === "/hello") {
        fs.readFile(path.join(__dirname, "public", "hello.html"), (err, data) => {
            if (err) {
                throw err;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });
    }
});

server.listen(3000, () => {
    console.log("Server has been started");
});
