// Assignment Code-given
var generateBtn = document.querySelector("#generate");


//Global variables
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Password Function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
};

//Functions
function generatePassword() {
  var passwordString = '';//password string
  var arrayHolderPassword = []

  //length of password
  var numberOfCharacters = window.prompt('How many characters would you like your password to contain? Choose between 8 and 128.');
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert('This needs a value between 8 and 128! Start Over.')
    return; 
  }

  var chooseSpecialChar = window.confirm('Do you want special characters to be included?');
  var chooseupperCase = window.confirm('Do you want upper case characters to be included?');
  var chooselowerCase = window.confirm('Do you want lower case characters to be included?');
  var choosenumbersChar = window.confirm('Do you want numeric characters to be included?');

  if (chooseSpecialChar) {
    Array.prototype.push.apply(arrayHolderPassword, specialChar);
  }

  if (chooseNumbers) {
    Array.prototype.push.apply(arrayHolderPassword, numbers);
  }

  if (chooseLowerCase) {
    Array.prototype.push.apply(arrayHolderPassword, lowerCase);
  }
  if (chooseUpperCase) {
    Array.prototype.push.apply(arrayHolderPassword, upperCase);
  }

  //for loop to loop through the new array arrayHolderPassword with user input length stored in numberOfCharacters
  for (var i = 0; i < numberOfCharacters; i++) {
    var newPasswordIndex = Math.floor(Math.random() * arrayHolderPassword.length);
    passwordString = passwordString + arrayHolderPassword[newPasswordIndex];
  }
  return (passwordString);
} 

// Add event listener to generate button-given
generateBtn.addEventListener("click", writePassword); {

}