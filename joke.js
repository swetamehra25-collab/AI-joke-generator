

// Select button and paragraph
const jokeBtn = document.getElementById('btn');
const jokeDisplay = document.getElementById('joke');

jokeBtn.addEventListener('click', () => {
    jokeDisplay.innerText = "Wait getting a joke... 😂";

    const API_URL = `https://official-joke-api.appspot.com/random_joke`;

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        jokeDisplay.innerText = `${data.setup} — ${data.punchline}`;
        console.log(data);
    })
    .catch(error => {
        jokeDisplay.innerText = "Oops! Something went wrong.";
        console.error(error);
    });
});








