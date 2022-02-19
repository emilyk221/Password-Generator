// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password.join("");
  } else {
    return null;
  }
  
}

// define character arrays
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", ",", ".", "?", "/"];

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
  let confirmUppercase = window.confirm("Select 'OK to confirm including uppercase characters in your password.");

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
let getRandomChar = function(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomCharacter = array[randomIndex];
  return randomCharacter;
}

// function to generate password
let generatePassword = function() {
  let passwordOptions = getPasswordOptions();
  let password = [];

  // set an array to include chosen character arrays
  let chosenArrays = [];

  if (!passwordOptions) {
    return null;
  }
  // include arrays from user criteria only and ensure that each character type chosen is included
  if (passwordOptions.confirmLowercase) {
    chosenArrays[0] = lowercaseCharacters;
  }

  if (passwordOptions.confirmUppercase) {
    chosenArrays[chosenArrays.length] = uppercaseCharacters;
  }

  if (passwordOptions.confirmNumeric) {
    chosenArrays[chosenArrays.length] = numericCharacters;
  }

  if (passwordOptions.confirmSpecial) {
    chosenArrays[chosenArrays.length] = specialCharacters;
  }

  // choose a random characters from each chosen character type
  for (let i = 0; i < chosenArrays.length; i++) {
    let pickedChar = getRandomChar(chosenArrays[i]);
    password[i] = pickedChar;
  }

  // choose remanining characters at random until password length is reached
  for (let i = password.length; i < passwordOptions.passwordLength; i++) {
    let pickedChar = getRandomChar(chosenArrays[Math.floor(Math.random() * chosenArrays.length)]);
    password[i] = pickedChar;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
