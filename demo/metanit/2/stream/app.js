const fs = require("fs");

const eventName = "data";

const writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");

const readableStream = fs.createReadStream("hello.txt", "utf8");

readableStream.on(eventName, function (chunk) {
    console.log(chunk);
});

readableStream.emit(eventName);
