import express from "express";

const app = express();
const port = 3000;

//a1')building "logger" named custom function > as custom middleware
function logger(req,res,next){
 console.log("Request Method:", req.method);
 console.log("Request URL:",req.url);
  next();
}

//a2')using=calling our logger middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//c1') terminal > cd [------]
//d1')start server >    nodemon index.js
//e1') start postman (for output)
//f1')end server [ctrl+c]