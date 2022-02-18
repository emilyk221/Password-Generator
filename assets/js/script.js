// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

let chooseLength = function() {
  // ask employee's desired password length
  let passwordLength = parseInt(window.prompt("Please enter your desird number of characters in your password."));

  // validate length of password is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    window.alert("You must pick a number between 8 and 128. Please try again.")
    chooseLength();
  }
}

let chooseCharacters = function() {
  // confirm selection of lowercase characters
  let confirmLowercase = window.confirm("Select 'OK' to use lowercase letters in your password or select 'Cancel' to avoid lowercase letters.");

  // confirm selection of uppercase characters
  let confirmUppercase = window.confirm("Select 'OK to use uppercase letters in your password or select 'Cancel' to avoid uppercase letters.");

  // confirm selection of numeric characters
  let confirmNumeric = window.confirm("Select 'OK' to use numeric characters in your password or select 'Cancel' to avoid numeric characters.");

  // confirm selection of special characters
  let confirmSpecial = window.confirm("Select 'OK' to use special characters in your password or select 'Cancel' to avoid special characters.");

  // make sure that at least one type of character was chosen
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    window.alert("You must use at least one character type in your password. Please try again.");
    chooseCharacters();
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// chooseLength();
// chooseCharacters();