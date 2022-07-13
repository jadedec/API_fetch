const quoteContainer = document.querySelector("#quote-container");
const getQuoteButton = document.querySelector("#get-quote-button");

//know we are going to get an object back
//Async/await
//Async - labelling the function saying it is not running top to bottom
//Access to await, pause wait for a response
//Fetch, send the request -> get a response back

const getRandomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random?maxLength=50");
    //getting response back
    const data = await response.json();
    console.log(data);
    quoteContainer.innerHTML += `
    <p class="quote">${data.author}
        <em>${data.content}<em>
    </p>`
}

getQuoteButton.addEventListener("click", getRandomQuote);

const getDogButton = document.querySelector("#get-dog-button");
const get5DogButton = document.querySelector("#get-5dog-button");

const getRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
        console.log("unsuccessful fetch, error code was: ${response.status}");
        return;
    }
    const data = await response.json();
    //console.log(data);
    quoteContainer.innerHTML = `
    <img class="quote" src="${data.message}">`
}

getDogButton.addEventListener("click", getRandomDog);


const get5RandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
    const data = await response.json();
    //console.log(data);
    data.message.forEach(message => {
        quoteContainer.innerHTML += `<img class="quote" src="${message}">`
    });
}

get5DogButton.addEventListener("click", get5RandomDog);
