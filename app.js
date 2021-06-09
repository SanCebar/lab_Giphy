console.log("js linked!");

/* Global Constants */
const api_key = "JdUkv5EiIQE2pjXg2iTh0ytvRY4W0S5F";
const limit = 9;
const rating = 'g';
const lang = "en";

const gif_form = document.querySelector("form");
gif_form.addEventListener("submit", getResults);

async function getResults (evt) {
    evt.preventDefault();
    const searchTerm = evt.target.gif.value;
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&rating=${rating}&lang=${lang}&api_key=${api_key}`;

    //go to giphy API
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    const data = responseData.data;
    console.log(data);
    //display
    displayResults(data);
}

function displayResults (data) {
    const display = document.querySelector(".gif-results");
    data.forEach(element => {
        display.innerHTML += `<img src="${element.image.original.url}">`;
    });
}
