let h1 = document.querySelector("h1");
let button = document.getElementById("fetchJokes");
// let joke = document.querySelector("#fetchJoke");

let url = "https://icanhazdadjoke.com/";

function getJokes() {
  let options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "testApplication "
    }
  };

  fetch(url, options).then(function(response) {
    response
      .json()
      .then(function(json) {
        h1.innerText = json.joke;
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}

button.addEventListener("click", getJokes);
