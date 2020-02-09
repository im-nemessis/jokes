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

  let errroHandler = response => {
    if (!response.ok) {
      h1.innerText =
        "couldn't find the jokes nework error probbaly check your internet connection ";
    }
  };

  let fetching = fetch(url, options);

  fetching.then(function(response) {
    errroHandler();
    response
      .json()
      .then(function(json) {
        h1.innerText = json.joke;
      })
      .catch(function(error) {
        h1.innerText =
          "couldn't find the jokes nework error probbaly check your internet connection ";
        console.log(error);
      });
  });
}

button.addEventListener("click", getJokes);
