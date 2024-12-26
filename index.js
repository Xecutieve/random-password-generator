const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pasFieldOne = document.getElementById("password-out-field-one")
let pasFieldTwo = document.getElementById("password-out-field-two")
let passOne = "";
let passTwo = "";
let input = document.getElementById("myInput");
let passLenght = 0

input.addEventListener("change" ,() => {
    passLenght = input.value
})

function generateRanPass() {
    passOne = ""
    passTwo = ""
    for(let i=0; i < passLenght; i++) {
        passOne += characters[Math.floor(Math.random() * characters.length)]
        passTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    pasFieldOne.textContent = passOne
    pasFieldTwo.textContent = passTwo

}

// 
//     

