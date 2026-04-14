//track - TODO 1,1.1 ; 2,2.1,2.2 ; 

import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

//TODO 1.1: get the url
const API_URL = "https://secrets-api.appbrewery.com";



//TODO 1: Fill in your values for the 3 types of auth.
// 1.1-a) register into the (bored-api) with username and password, 
//then use the user and pass to get api key and token
 const yourUsername = "";// get| http://......../register
const yourPassword = ""; // http://......../register
const yourAPIKey = ""; // post|http://......../your-api-key
const yourBearerToken = ""; //post| http://......../your-barer-token



app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});


//TODO 2: Use axios to hit up the /random endpoint
      //TODO 2.2:Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  //The data you get back should be sent to the ejs file as "content"

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});


  

  //TODO 3: Write your code here to hit up the /all endpoint
  
      //HINT: This is how you can use axios to do basic auth:
      // https://stackoverflow.com/a/74632908
      /*
       axios.get(URL, {
          auth: {
            username: "abc",
            password: "123",
          },
        });
      */
       //Specify that you only want the secrets from page 2

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});



  



  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});




  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });

    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    res.status(404).send(error.message);
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

