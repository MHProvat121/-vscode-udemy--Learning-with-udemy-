import express from "express";
const app = express();
const port = 3000;

//a1')browser request to server - to -> get ['/'=homepage]
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>"); //b1')server res[responses] and send text -> to browser
});

//a2')browser request to server - to -> get ['/about'=aboutpage endpoint]
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");//b1')server res[responses] and send text -> to browser
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//c1') terminal > cd [------]
//d1')start server >    nodemon index.js
