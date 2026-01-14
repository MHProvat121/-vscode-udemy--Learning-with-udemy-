//a') selecting file system
const fs = require("fs");

//b')writing a file system 
fs.writeFile("myvoice.txt", "this is voice of NODEJS!", (err) => {
    if (err) throw err;
    console.log("the file has been saved!");
});

//c')reading a file system (with no encoding buffer== shows texts in number)
fs.readFile("myvoice.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
})

//c2')reading a file system (with encoding buffer= shows the real text)

fs.readFile("myvoice.txt", "utf8",(err, data) => {
    if(err) throw err;
    console.log(data);
})