import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Built-in body parser (modern)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received successfully");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//c1') terminal > cd [------]
//d1')start server >    nodemon index.js
//e1') start postman (for output)
//f1')end server [ctrl+c]