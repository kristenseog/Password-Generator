
//code that generates two random 15 length password when user clicks the button
//set up ability to set the length variation
//add "copy-on-click" button
//Toggle "symbols" and " numbers" on/off switch/control


const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEL = document.getElementById("generate-el") //generate button
// let versionOneEl = document.getElementById("versionOne-el" )
// let versionTwoEl = document.getElementById("versionTwo-el")

const pwElV1 = document.getElementById("pwV1");
const pwElV2 = document.getElementById("pwV2");
const pwElV3 = document.getElementById("pwV3");
const pwElV4 = document.getElementById("pwV4");




const copyElV1 = document.getElementById("copyV1"); //need to break into two version copy 1 & 2
const copyElV2 = document.getElementById("copyV2"); //need to break into two version copy 1 & 2
const copyElV3 = document.getElementById("copyV3"); 
const copyElV4 = document.getElementById("copyV4"); 


const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("UpperCase");
const lowerEl =  document.getElementById("LowerCase");
const numberEl = document.getElementById("Numbers");
const symbolEl = document.getElementById("Symbols");

//using scrimba tips
// let passwordLength = 15
    //create a randomCharacterGen() //this is going to generate a single random character in our array
    // function randomCharacterGen() {
    //     let randomCharacter = Math.floor(Math.random() * characters.length)
    //     return characters[randomCharacter]
    // } NO LONGER WORKS BC BROKEN INTO 4 CONSTS = NEED NEW FXNS FOR EACH
    //then, create a passwordGen() with 15 length 
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

    let randomPassword = ""; //create a string to be filled in

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

    

    //    pwElV1.textContent = randomPassword; //not working? after adding 2nd 
    //    pwElV2.textContent = randomPassword;
// console.log(randomPassword)
// pwElV1.textContent = randomPassword

    return randomPassword;
}

// how to i set it to generate two at a time??????
// let passwordGenOne = passwordGen();
// let passwordGenTwo = passwordGen();
// function generateVersion() {
// pwElV1.textContent = passwordGenOne;
// pwElV2.textContent = passwordGenTwo;
// }
// pwElV1.textContent = randomPassword();
// pwElV2.textContent = randomPassword();


// let passwordGenOne = randomPassword()
// let passwordGenTwo = randomPassword()



// function generateVersion() {
//     versionOneEl.textContent = "Version 1: " + passwordGenOne
//     versionTwoEl.textContent = "Version 2: " + passwordGenTwo    
// }


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
       // Here we are validating taht the User chose at least one checkbox option
        if (Xs.length === 0) { //what does this mean?
            return ""
        } else {
          // return "check at least one box to generate "
            return Xs[Math.floor(Math.random() * Xs.length)];  // Xs = [5]
        }

    //     if (Xs.length < 8) { 
    //         return ""
    //     } else {
    //         return Xs[Math.floor(Math.random() * Xs.length)];  
    //     }
    //     if (Xs.length > 30) {
    //     } else {
    //         return Xs[Math.floor(Math.random() * Xs.length)]; 
    // }


    
// function generateVersion() {
//     pwElV1.textContent = "";
//     pwElV2.textContent = "";

//     pwElV1.textContent += passwordGen();
//     pwElV2.textContent += passwordGen();
 }
    
    copyElV1.addEventListener("click", () => {
        // const textarea = document.createElement("textarea");
        const randomPassword = pwElV1.textContent;
        
        if(!randomPassword) { 
            return;
        }
            navigator.clipboard.writeText(randomPassword) //***
        // textarea.value = randomPassword;
        // document.body.appendChild(textarea);
        // textarea.select();
        // document.execCommand("copyV1");
        // textarea.remove();
        alert("RandomPassword copied to clipboard");
    })

    copyElV2.addEventListener("click", () => {
        // const textarea = document.createElement("textarea");
        const randomPassword = pwElV2.textContent;
        
        if(!randomPassword) { 
            return;
        }
            navigator.clipboard.writeText(randomPassword)
        // textarea.value = randomPassword;
        // document.body.appendChild(textarea);
        // textarea.select();
        // document.execCommand("copyV2");
        // textarea.remove();
        alert("RandomPassword copied to clipboard");
    })

    copyElV3.addEventListener("click", () => {
        // const textarea = document.createElement("textarea");
        const randomPassword = pwElV3.textContent;
        
        if(!randomPassword) { //what is this???
            return;
        }
        navigator.clipboard.writeText(randomPassword)

        // textarea.value = randomPassword;
        // document.body.appendChild(textarea);
        // textarea.select();
        // document.execCommand("copyV3");
        // textarea.remove();
        alert("RandomPassword copied to clipboard");
    })

    copyElV4.addEventListener("click", () => {
        // const textarea = document.createElement("textarea");
        const randomPassword = pwElV4.textContent;
        
        if(!randomPassword) { //what is this???
            return;
        }
        navigator.clipboard.writeText(randomPassword)
        // textarea.value = randomPassword;
        // document.body.appendChild(textarea);
        // textarea.select();
        // document.execCommand("copyV4");
        // textarea.remove();
        alert("RandomPassword copied to clipboard");
    })



    function generateVersion() {
        pwElV1.textContent = "";
        pwElV2.textContent = "";
        pwElV3.textContent = "";
        pwElV4.textContent = "";

        //pwElV1.textContent += passwordGen();
        //pwElV2.textContent += passwordGen();
        pwElV1.textContent = passwordGen();
        pwElV2.textContent = passwordGen();
       pwElV3.textContent = passwordGen();
       pwElV4.textContent = passwordGen();


        //create an alert message here if none of the boxes are checked off**

    }






    //generateEl.addEventListener("click", passwordGen) or setup on html button onclick
//     generateEl.addEventListener("click", () => {
//         if(!randomPassword) {
//             return "check at least one box to generate a password";
//         }
//     }
//    )   //  else if (alert("check at least one box to generate a password")) {
    //         //     let message = alert("check at least one box to generate a password");
    //         // return message;
    //             if (!alert("check at least one box to generate a password")) {
    //         window.location.reload();
    //             }
    //          }
    //setTimeout(function() {notification.close()}, 1000)
//     var alert = bootbox.alert('Massage')
// alert.show();
// setTimeout(function(){alert.modal('hide'); }, 4000);