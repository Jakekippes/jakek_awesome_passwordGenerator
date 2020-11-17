// Assignment Code
let length = Number(prompt("Enter a password length between 8 and 128")),
charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),

let generateBtn = document.querySelector("#generate");
let password = generatePassword();
let passwordText = document.querySelector("#password");
 passwordText.value = password;


// Generates random password
function writePassword() {
  let charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!#$%&\()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  let charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  let retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
