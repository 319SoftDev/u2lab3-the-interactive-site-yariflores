// YOUR CODE HERE
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    const color = e.target.value;
    if (color === 'blue') {
        radioOutput.innerHTML = 'You picked blue 💙';
    } else if (color === 'green') {
        radioOutput.innerHTML = 'You picked green 💚';
    } else if (color === 'pink') {
        radioOutput.innerHTML = 'You picked pink 💕';
    } else if (color === 'black') {
        radioOutput.innerHTML = 'You picked black 🖤';
    }
};

radioInput.addEventListener('change', displayColor);


// RandomNumber


const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
    const value = e.target.valueAsNumber;
    e.target.select(); 

    if (value < randomNumber) {
        numOutput.innerHTML = `Not ${value}, guess higher!`;
    } else if (value > randomNumber) {
        numOutput.innerHTML = `Not ${value}, guess lower!`;
    } else {
        numOutput.innerHTML = `Hurray! You got it! It's ${randomNumber}`;
    }
};

numInput.addEventListener('change', checkNumber);




// 7 continents

const continentInput = document.querySelector("#text-input"); 
const continentOutput = document.querySelector("#sr-continent-alert"); 
const continents = ['asia', 'africa', 'north america', 'south america', 'antarctica', 'europe', 'australia'];
let guessedContinents = [];

const checkContinent = (e) => {
    const input = e.target.value.toLowerCase();
    e.target.value = ''; 
    if (continents.includes(input)) {
        if (!guessedContinents.includes(input)) {
            guessedContinents.push(input);
            continentOutput.innerHTML = `Yes, ${input.charAt(0).toUpperCase() + input.slice(1)} is a continent. ${guessedContinents.length} out of 7.`;
            document.querySelector(`img[alt="${input.charAt(0).toUpperCase() + input.slice(1)}"]`).classList.remove("hidden");
        } else {
            continentOutput.innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1)} has already been selected.`;
        }
    } else {
        continentOutput.innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1)} is not a continent.`;
    }
};

continentInput.addEventListener('change', checkContinent);




// background change


const colorForm = document.querySelector("#back_color");
const colorInput = document.querySelector("#color");
const body = document.body;

const changeBackground = (e) => {
    e.preventDefault(); 
    if (document.querySelector("#human").checked) {
        body.style.background = colorInput.value;
    }
};

colorForm.addEventListener('submit', changeBackground);


// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

