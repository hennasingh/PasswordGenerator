const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"];

let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");

function generatePassword() {
    boxOne.value = getPassword();
    boxTwo.value = getPassword()
}

function randomCharacter() {

    let index = Math.floor(Math.random() * characters.length)

    return characters[index];
}

function getPassword() {

    let string = ""
    for(let y = 0; y < 15; y++) {
        string += randomCharacter();
    }
    return string
    
}