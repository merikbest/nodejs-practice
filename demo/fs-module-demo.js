const fs = require('fs');
const path = require("path");

// create dir
// fs.mkdir(path.join(__dirname, "test-directory"), (err) => {
//     if (err) {
//         throw err;
//     }
// });


const filePath = path.join(__dirname, "test-directory", "text.txt");

// write text to file
// fs.writeFile(filePath, "Hello World1", (err) => {
//     if (err) {
//         throw err;
//     }
//
//     // write text existing file
//     fs.appendFile(filePath, "Hello World2", (err) => {
//         if (err) {
//             throw err;
//         }
//     });
// });

fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
        throw err;
    }

    console.log(content)
});



