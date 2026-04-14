//track a',a1' - b',b1' - c',c1',c2'

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //b') obj new Date() and method getDay()
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  //c') create render values 
  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

//b1') create if conditon 
//c1') make variables as render value
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

//a') render ejs file > a1') pass key:value pairs through it
//c2') passed variable values 
  res.render("solution.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
