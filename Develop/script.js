// Add event listener to generate button 



// Assignment Code
var generateBtn = document.querySelector("#generate");
// creating arrays for all the possible characters 
var lowercaseCharset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberCharset = ["1","2","3","4","5","6","7","8","9","0"]; 
var specCharset = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\",","^","_","`","{","|","}","~",]; 
// leaving one variable open to add other arrays into once prompted  
var allCharset = [""]


function generatePassword() { 
  var result = (""); 
// intializing the password length 
  var passwordLength = window.prompt("Enter your password length");
// making sure input is between 8 and 128 
  if (passwordLength < 8 || passwordLength > 128) {   
    alert ("Please enter Password between 8 and 128 characters");} 
// if password is correct length, it will start the rest
  else { 
    window.alert("Your password length will be " + passwordLength);
    // adding prompt to add numbers
    var hasNumbers=window.confirm ("Do you want numbers in your password?"); 
    if (hasNumbers === true) { 
      alert("Password will have numbers") 
      // adding numbers to our main character set 
      allCharset = allCharset.concat(numberCharset);
    } 
    var hasUppercase=window.confirm ("Do you want uppercase letters in your password?"); 
    if (hasUppercase === true) { 
      alert("Password will have uppercase letters")
      allCharset = allCharset.concat(uppercaseCharset);
    
    }

    
  
    var hasLowercase=window.confirm ("Do you want lowercase letters in your password?")
    if (hasUppercase === true) { 
      alert("Password will have lowercase letters")
      allCharset = allCharset.concat(lowercaseCharset);
    };

    var hasSpecialcharacters=window.confirm ("Do you want special characters in your password?")
    if (hasSpecialcharacters===true) { 
      alert("Password will have special characters"); 
      allCharset = allCharset.concat(specCharset);
    }; 
    // making sure at least one character is selected 
    console.log(allCharset);
    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecialcharacters === false) {
      return "Please select at least one character type.";
    };
    // creating random characterset based on prompts 
    for (var i = 0; i < passwordLength; i++) { 
    var randomChar = [Math.floor(Math.random() * allCharset.length)]
    }
    console.log(randomChar); 
    // adding random and all characters together 
    result += allCharset[randomChar]; 
    console.log(result)
    return result; 

  }; };


  
  
  

  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 


  passwordText.value = password;

  
}  

  

generateBtn.addEventListener("click", writePassword); 

