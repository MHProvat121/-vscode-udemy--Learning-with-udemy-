//track a'-c'

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //a') ejs homepage
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  //b') get the form value > b1') add their length 
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  console.log(`you have ${numLetters} letters in your name`);
  //c') render solution.ejs and add ejs variable=key=numberOfLetters
  res.render("index.ejs", { numberOfLetters: numLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
