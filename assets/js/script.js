// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

// define character arrays
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/"];

//function to prompt user's criteria
let getPasswordOptions = function() {
  // ask employee's desired password length
  let passwordLength = parseInt(window.prompt("How many characters would you like your password to contain."));

  // validate length of password is between 8 and 128 characters
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("You must pick a number between 8 and 128. Please try again.");
    return null;
  }

  // confirm selection of lowercase characters
  let confirmLowercase = window.confirm("Select 'OK' to confirm including lowercase characters in your password.");

  // confirm selection of uppercase characters
  let confirmUppercase = window.confirm("Select 'OK to confirm including uppercase charaacters in your password.");

  // confirm selection of numeric characters
  let confirmNumeric = window.confirm("Select 'OK' to confirm including numeric characters in your password.");

  // confirm selection of special characters
  let confirmSpecial = window.confirm("Select 'OK' to confirm including special characters in your password.");

  // make sure that at least one type of character was chosen
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    window.alert("You must use at least one character type in your password. Please try again.");
    return null;
  }
  // define password criteria
  let passwordOptions = {
    passwordLength: passwordLength,
    confirmLowercase: confirmLowercase,
    confirmUppercase: confirmUppercase,
    confirmNumeric: confirmNumeric,
    confirmSpecial: confirmSpecial
  };
  // return password criteria
  return passwordOptions;
}

//function to return a random character
let getRandomCharacter = function(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomCharacter = array[randomIndex];
  return randomCharacter;
}

// function to generate password
let generatePassword = function() {
  let passwordOptions = getPasswordOptions();
  let password = [];

  // include arrays from user criteria only

  // ensure that each character type chose in criteria is used

  // choose a random characters until password length is reached
  for (let i = 0; i <= passwordOptions.passwordLength; i++) {
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
