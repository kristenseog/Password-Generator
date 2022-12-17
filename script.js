const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let generateEL = document.getElementById("generate-el")

const pwElV1 = document.getElementById("pwV1");
const pwElV2 = document.getElementById("pwV2");
const pwElV3 = document.getElementById("pwV3");
const pwElV4 = document.getElementById("pwV4");

const copyElV1 = document.getElementById("copyV1"); 
const copyElV2 = document.getElementById("copyV2"); 
const copyElV3 = document.getElementById("copyV3");
const copyElV4 = document.getElementById("copyV4");

const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("UpperCase");
const lowerEl = document.getElementById("LowerCase");
const numberEl = document.getElementById("Numbers");
const symbolEl = document.getElementById("Symbols");

function randomUpperCaseGen() {
    let randomUpperCase = Math.floor(Math.random() * upperLetters.length)
    return upperLetters[randomUpperCase]
}

function randomLowerCaseGen() {
    let randomLowerCase = Math.floor(Math.random() * lowerLetters.length)
    return lowerLetters[randomLowerCase]
}

function randomNumbersGen() {
    let randomNumbers = Math.floor(Math.random() * numbers.length)
    return numbers[randomNumbers]
}

function randomSymbolsGen() {
    let randomSymbols = Math.floor(Math.random() * symbols.length)
    return symbols[randomSymbols]
}

function passwordGen() {
    const length = lengthEl.value;
    if (length < 8 || length > 30) {
        return "input appropriate length"
    }

    let randomPassword = "";

    if (upperEl.checked) {
        randomPassword += randomUpperCaseGen()
    }
    if (lowerEl.checked) {
        randomPassword += randomLowerCaseGen()
    }
    if (numberEl.checked) {
        randomPassword += randomNumbersGen()
    }
    if (symbolEl.checked) {
        randomPassword += randomSymbolsGen()
    }

    if (upperEl.checked === false && lowerEl.checked === false && numberEl.checked === false && symbolEl.checked === false) {
        return "check at least one box to generate a password"
    }

    for (let i = randomPassword.length; i < length; i++) {
        const X = generateX()
        console.log(X)
        randomPassword += X;
        console.log(randomPassword);
    }

    console.log(randomPassword);

    return randomPassword;
}

function generateX() {
    const Xs = [];

    if (upperEl.checked) {
        Xs.push(randomUpperCaseGen());
    }
    if (lowerEl.checked) {
        Xs.push(randomLowerCaseGen());
    }
    if (numberEl.checked) {
        Xs.push(randomNumbersGen());
    }
    if (symbolEl.checked) {
        Xs.push(randomSymbolsGen());
    }

    if (Xs.length === 0) { 
        return ""
    } else {
        return Xs[Math.floor(Math.random() * Xs.length)];  // Xs = [5]
    }
}

copyElV1.addEventListener("click", () => {
    const randomPassword = pwElV1.textContent;

    if (!randomPassword) {
        return;
    }

    navigator.clipboard.writeText(randomPassword) 
    alert("RandomPassword copied to clipboard");
})

copyElV2.addEventListener("click", () => {
    const randomPassword = pwElV2.textContent;

    if (!randomPassword) {
        return;
    }

    navigator.clipboard.writeText(randomPassword)
    alert("RandomPassword copied to clipboard");
})

copyElV3.addEventListener("click", () => {
    const randomPassword = pwElV3.textContent;

    if (!randomPassword) { //what is this???
        return;
    }

    navigator.clipboard.writeText(randomPassword)
    alert("RandomPassword copied to clipboard");
})

copyElV4.addEventListener("click", () => {
    const randomPassword = pwElV4.textContent;

    if (!randomPassword) {
        return;
    }

    navigator.clipboard.writeText(randomPassword)
    alert("RandomPassword copied to clipboard");
})



function generateVersion() {
    pwElV1.textContent = "";
    pwElV2.textContent = "";
    pwElV3.textContent = "";
    pwElV4.textContent = "";

    pwElV1.textContent = passwordGen();
    pwElV2.textContent = passwordGen();
    pwElV3.textContent = passwordGen();
    pwElV4.textContent = passwordGen();
}




