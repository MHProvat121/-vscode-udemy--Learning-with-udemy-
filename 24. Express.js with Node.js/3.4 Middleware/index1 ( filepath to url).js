import express from "express";
//a1')add  filepath to url generator packages 
import { dirname } from "path"; //added for filepath url
import { fileURLToPath } from "url"; //added for filepath url
const __dirname = dirname(fileURLToPath(import.meta.url));//added for filepath url
 
const app = express();
const port = 3000;

//a2')added  filepath handler > get homepage 
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html") //shows filepath in log
  res.sendFile(__dirname + "/public/index.html"); // sends the html file to the browser
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//cd [---------------]
// start the server>  here: "nodemon index1 (dynamic filepath select).js"
//start postman , get localhost:3000