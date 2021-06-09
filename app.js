console.log("js linked!");

/* Global Constants */
const api_key = "JdUkv5EiIQE2pjXg2iTh0ytvRY4W0S5F";
const limit = 9;
const rating = "g";
const lang = "en";

const display = document.querySelector(".gif-results");
const gif_form = document.querySelector("form");
gif_form.addEventListener("submit", getResults);

async function getResults(evt) {
    evt.preventDefault();
    console.log("form submitted!");
    const searchTerm = evt.target.giffy.value;
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&rating=${rating}&lang=${lang}&api_key=${api_key}`;

    //go to giphy API
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    const data = responseData.data;
    console.log(data);

    displayResults(data);
}

function displayResults (data) {
    data.forEach(element => {
        display.innerHTML += `<img alt="${element.title}" src="${element.images.original.url}" >`;
    });
}

// function handleFormSubmit (evt) {
//     evt.preventDefault();
//     console.log("form submitted!");
//     const searchTerm = evt.target.giffy.value;
    
//     const data = getResults(searchTerm);
//     displayResults(data);
// }
