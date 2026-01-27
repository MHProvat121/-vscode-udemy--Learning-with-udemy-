import express from "express";
//b1') import bodyParser
import bodyParser from "body-parser";

//a1')import filepath to url 
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

//b2') adding/using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//c1') making custom middleware > to view the req object body + show band name
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

//c2') calling custom middleware
app.use(bandNameGenerator);

//a2') get handles>  the index file > via filepath add
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//submit handler
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//c1') terminal > cd [------]
//d1')start server >    nodemon index.js
//e1') start postman (for output)
//f1')end server [ctrl+c]