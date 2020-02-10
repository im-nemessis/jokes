let h1 = document.querySelector("h1");
let button = document.getElementById("fetchJokes");
let button2 = document.getElementById("fetchGif");
let img = document.getElementById("img");
let para = document.getElementById("tochange");

// everything fine up here

let url = "https://icanhazdadjoke.com/";
let letGifUrl =
  "https://api.giphy.com/v1/gifs/random?api_key=sBMv5QiFFFE6KS6SJHIVn7yb4LpY1jk9&tag=&rating=R";
// all apis url

/* function getJoke() {
  let options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "testApplication"
    }
  };

  let fetching = fetch(url, options);

  fetching.then(function(response) {
    if (!response.ok) {
      h1.innerText =
        "couldn't find the jokes nework error probbaly check your internet connection ";
    }
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
*/

function getGif() {
  let fetching = fetch(letGifUrl);

  fetching.then(function(response) {
    if (!response.ok) {
      h1.innerText =
        "couldn't find the jokes nework error probbaly check your internet connection ";
    }
    response
      .json()
      .then(function(json) {
        console.log(json);

        let srcUrl = json.data.images.fixed_height_small_still.url;
        console.log(srcUrl);
        img.src = srcUrl;
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}

let getJoke = function() {
  fetch("/joke", { method: "GET" }).then(function(response) {
    response
      .json()
      .then(function(json) {
        console.log(json);
        para.innerText = json.result;
        h1.innerText = "TRY again !!!!";
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};

function invokeGetGif() {
  img.src = "src/img/loading.png";
  getGif();
}

function invokeGetJoke() {
  para.innerText = "YOUR JOKES IS LOADING........";
  getJoke();
}

img.addEventListener("click", invokeGetGif);
button.addEventListener("click", invokeGetJoke);
button2.addEventListener("click", invokeGetGif);
