 // all the required modules

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const request = require("request");
const app = express();

// all requirement ends here , of modules;

//the veiw engine is set
// app.set("view engine", "ejs");

//path is defined for conviniance
const port = 3000;
const dir = path.join(__dirname, "public");

// all teh middeleware is intialized here

app.use(bodyParser.urlencoded({ extended: true })); // bodyParser for getting the form data

app.use(express.static(dir));

// all  possible get routes

app.get("/", (req, res) => {
  res.sendFile(dir + "/index.html");
});

app.get("/joke", (req, res) => {
  let options = {
    url: "https://icanhazdadjoke.com/",
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "testApplication "
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      console.log(error);
      res.json({ result: "CHECK YOUR iNTERNET CONNECTION" });
    } else {
      console.log(body);
      let data = JSON.parse(body);
      console.log(data);
      res.json({ result: data.joke });
    }
  });
});

app.listen(port, () => {
  console.log("");
});
