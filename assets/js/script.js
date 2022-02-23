// Assignment Code
let generateBtn = document.querySelector("#generate");

// define character arrays
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", ",", ".", "?", "/"];


// FUNCTIONS

// Write password to the #password input
function writePassword() {
  let passwordOptions = getPasswordOptions();
  let password = generatePassword(passwordOptions);
  let passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password.join("");
  } else {
    return null;
  }
}

//function to prompt user's criteria
let getPasswordOptions = function() {
  // ask employee's desired password length
  let passwordLength = parseInt(window.prompt("How many characters would you like your password to contain."));

  // validate length of password is between 8 and 128 characters
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("You must pick a number between 8 and 128. Please try again.");
    return getPasswordOptions();
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
    return getPasswordOptions();
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
let generatePassword = function(options) {
  let passwordOptions = options;
  let password = [];

  // set an array to include chosen character arrays
  let chosenArrays = [];

  // set variables to track if password contains all types
  let hasLower = false;
  let hasUpper = false;
  let hasNumber = false;
  let hasSpecial = false;

  if (!passwordOptions) {
    return null;
  }
  // include arrays from user criteria only
  if (passwordOptions.confirmLowercase) {
    chosenArrays[chosenArrays.length] = lowercaseCharacters;
  } 
  else {
    hasLower = true;
  }

  if (passwordOptions.confirmUppercase) {
    chosenArrays[chosenArrays.length] = uppercaseCharacters;
  } 
  else {
    hasUpper = true;
  }

  if (passwordOptions.confirmNumeric) {
    chosenArrays[chosenArrays.length] = numericCharacters;
  } 
  else {
    hasNumber = true;
  }

  if (passwordOptions.confirmSpecial) {
    chosenArrays[chosenArrays.length] = specialCharacters;
  } 
  else {
    hasSpecial = true;
  }

  // MY FIRST ATTEMPT TO CREATE A RANDOM PASSWORD THAT IS SURE TO INCLUDE ALL THE CHOSEN CHARACTER TYPES
  // // choose random characters from each chosen character type
  // for (let i = 0; i < chosenArrays.length; i++) {
  //   let pickedChar = getRandomChar(chosenArrays[i]);
  //   password[i] = pickedChar;
  // }

  // // choose remanining characters at random until password length is reached
  // for (let i = password.length; i < passwordOptions.passwordLength; i++) {
  //   let pickedChar = getRandomChar(chosenArrays[Math.floor(Math.random() * chosenArrays.length)]);
  //   password[i] = pickedChar;
  // }

  // MY ATTEMPT AT AVOIDING PREDICTABILITY OF FIRST 2-4 CHARACTERS FROM CODE ABOVE (LOOPS THRU ARRAY OF CHOSEN TYPES ONCE BEFORE ADDS RANDOM ARRAY CHOICE)
  // choose random characters until password length is reached
  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    let pickedChar = getRandomChar(chosenArrays[Math.floor(Math.random() * chosenArrays.length)]);
    password[i] = pickedChar;

    // verify that all chosen character types are included in password
    if (lowercaseCharacters.includes(pickedChar)) {
      hasLower = true;
    }
    if (uppercaseCharacters.includes(pickedChar)) {
      hasUpper = true;
    }
    if (numericCharacters.includes(pickedChar)) {
      hasNumber = true;
    }
    if (specialCharacters.includes(pickedChar)) {
      hasSpecial = true;
    }
  }

  // // manual check to see if password generated meets criteria
  // console.log(password);

  // if not all chosen character types are included then generate a new password, otherwise return password
  if (!hasLower || !hasUpper || !hasNumber || !hasSpecial) {
    return generatePassword(passwordOptions);
  } else {
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
