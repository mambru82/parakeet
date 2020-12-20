// Assignment code here
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
  //initializes an empty array
  var workingArray = [];
  //checks the length of the array 
  console.log(workingArray);
  while (workingArray.length===0) {
  var yesLowercase = confirm ("Would you like your password to include lower-case characters?");
  if (yesLowercase === true) {
    //adds the randomLower function
    workingArray.push(randomLower);
    window.alert ("Your password will include lowercase characters.")
  } else {
    window.alert ("Your password will not include lowercase characters ")
  }
  var yesUppercase = confirm ("Would you like your password to include upper-case characters?");
  if (yesUppercase === true) {
    //adds the randomUpper function
    workingArray.push(randomUpper);
    window.alert ("Your password will include upper-case characters.");
  } else {
    window.alert("Your password will not include upper-case characters.")
  }
  var yesSC = confirm ("Would you like your password to include special characters?");
  if (yesSC === true) {
    //adds the randomSC function
    workingArray.push(randomSC);
    window.alert ("Your password will include  special characters");
  } else {
    window.alert("Your password will not include special characters")
  }
  var yesNum = confirm ("Would you like your password to include numeric characters?")
  if (yesNum === true) {
    //adds the randomNC function
    workingArray.push(randomNC);
    window.alert ("Your password will include numeric characters")
  } else {
    window.alert ("Your password will not include numeric characters.")
  }
  //checks to see if there is at least one item in the array
  if (workingArray.length === 0){
    alert("I'm sorry, you need to have at least one character type to generate a password, please try again");
    }
  else {
    console.log (workingArray);
    return workingArray;
  }
}
}

var passLength = function() {
  do {
  var passwordLength = parseInt(prompt("Please enter the password length (8 to 128 characters)"));
  if (!passwordLength || passwordLength < 8 || passwordLength > 128){
    window.alert ("You need to enter a valid number between 8 and 128")
  } else {
    window.alert ("You have chosen to generate a password " + passwordLength + " characters long.")
  }}
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) 
  return passwordLength;
}

// generate password function
function generatePassword () {
  var specLength = passLength();
  workingArray = charCriteria();
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
