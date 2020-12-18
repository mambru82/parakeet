// Assignment code here
//WHEN I click the button to generate a password
// -- prompt to generate a password 

function generatePassword () {
  console.log ("end of generatePassword function");
}
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  if (window.confirm("If you would like to proceed with password generation, press OK")) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
  } else {
    window.alert("please try again later")
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
