// Assignment code here
//WHEN I click the button to generate a password
//initialize string variables for all possible characters involved
var specialCharacters ="\"$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//random number generator function
function randomNumber (min, max) {
  var value = Math.floor(Math.random() * (max-min +1) + min);

  return value;
};
// random character generator functions
//**generates a random special character
function randomSC() {
  var value =  specialCharacters[randomNumber(0,(specialCharacters.length)-1)];
  return value;
};
//**generates a random lowercase character
function randomLower() {
  var value = lowercase[randomNumber(0,(lowercase.length)-1)];
  return value;
};
//**generates a random uppercase character
function randomUpper() {
  var value = uppercase[randomNumber(0,(uppercase.length)-1)];
  return value;
}
//**generates a random numeric character
function randomNC() {
  var value = numeric[randomNumber(0,(numeric.length)-1)];
  return value;
}

//console check to ensure the functions are working
//console.log(randomLower(), randomUpper(), randomSC(), randomNC());


var charCriteria = function() {
  //places four functions in an array
  var workingArray = [randomLower, randomUpper, randomSC, randomNC];
  //checks the length of the array 
  console.log(workingArray); 
  var yesLowercase = confirm ("Would you like your password to include lower-case characters?");
  if (yesLowercase === false) {
    var detector = workingArray.indexOf(randomLower);
    workingArray.splice(detector, 1);
    window.alert ("Your password will not include lowercase characters.")
  }
  var yesUppercase = confirm ("Would you like your password to include upper-case characters?");
  if (yesUppercase === false) {
    var detector = workingArray.indexOf(randomUpper);
    workingArray.splice(detector, 1);
    window.alert ("Your password will not include upper-case characters.");
  }
  var yesSC = confirm ("Would you like your password to include special characters?");
  if (yesSC === false) {
    var detector = workingArray.indexOf(randomSC);
    workingArray.splice(detector, 1);
    window.alert ("Your password will not include special characters");
  }
  var yesNum = confirm ("Would you like your password to include numeric characters?")
  if (yesNum === false) {
    var detector = workingArray.indexOf(randomNC);
    workingArray.splice(detector, 1);
    window.alert ("Your password will not include numeric characters")
  }
  //checks to see if there is at least one item in the array
  if (workingArray.length < 1) {
    alert("I'm sorry, you need to have at least one character type to generate a password, please try again");
    var workingArray = [randomLower, randomUpper, randomSC, randomNC];
    charCriteria();
    console.log(workingArray);
    return workingArray;
    }
  else {
    return workingArray;
  }
  
}
// generate password function
function generatePassword () {
  var specLength = parseInt(prompt("Please enter the password length (8 to 128 characters)"));
  if (!specLength) {
    window.alert("You did not enter a valid value!");
    generatePassword();
  } else if (specLength < 8 || specLength > 128) {
    window.alert("Your value was not within 8 and 128")
    generatePassword();
  } else {
    window.alert("You have chosen to generate a password " + specLength + " characters long.");
    console.log("The length within the generate password is " + specLength);
    workingArray = charCriteria();
  //asks whether a specific type of character should be included, removes it from the array if not

    console.log (specLength, workingArray);
    password = "";
  //ensures at least one type of character is in the password
  for (var i=0; i<workingArray.length; i++) {
    var passchar = workingArray[i]();
    password = password + passchar;
  }
  //resets the password length variable
  var runningLength = password.length;
  //addresses the rest of the variable
 for (var i=0; i<specLength - runningLength; i++) {
   var passchar = workingArray[randomNumber(0,(workingArray.length-1))]();
   password = password + passchar;
  }
  console.log(password, password.length);
  console.log(workingArray);
  console.log ("end of generatePassword function");
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // -- prompt to generate a password when user presses button
  if (window.confirm("If you would like to proceed with password generation, press OK")) {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
  } else {
    window.alert("please try again later")
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
