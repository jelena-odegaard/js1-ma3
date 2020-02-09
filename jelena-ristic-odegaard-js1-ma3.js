//question 1

const subtract = (a, b) => a - b;

//question 2

const baseUrl = "http://api.rawg.io/api/games?genres=sports";

fetch (baseUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (json){
        for (let i=0; i<json.results.length; i++){
            console.log(json.results[i].name);
        }
    })

    .catch(function(error) {
        document.location.href = "error.html";
    });


//question 3

const params = document.querySelector("p");

const changeText = text.replace("cats", "giraffes");

params.innerText = changeText;

//question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")){
    userId=params.get("userId");

    if (userIdNumber < 10){
        document.location.href = "first.html"
    }
    else if (userNuberId >= 10){
        document.location.href = "second.html"
    }
}

else {
    document.location.href = "third.html"
}

//question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

//question 6

const liParrot = document.createElement ("li");

liParrot.className = "parrots";

liParrot.innerText = "Parrots";

li.cows.after(liParrot);

//question 7

const baseUrl = "https://api.rawg.io/api/games/3801";

fetch (baseUrl)
    .then(function (response){
        return response.json();
    })

    .then(function(json)){
        const textValue = document.querySelector(".rating").value = "rating";
    }

    .catch(function(error) {
        console.dir (error);
    });



