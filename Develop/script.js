// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCharset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberCharset = ["1","2","3","4","5","6","7","8","9","0"]; 
var specCharset = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\",","^","_","`","{","|","}","~",]; 
var allCharset = (lowercaseCharset, uppercaseCharset, numberCharset, specCharset)
passwordLength = [8,128]

function generatePassword() { 
  
  
  
  var passwordLength = window.prompt("Enter your password length");
  window.alert("Your password length will be " + passwordLength);

  var hasNumbers=window.confirm ("Do you want numbers in your password?"); 
  if (hasNumbers === true) { 
    alert("Password will have numbers") 
  } else (hasNumbers !== true); { 
    allCharset !== numberCharset; 
  }; 
  
  var hasUppercase=window.confirm ("Do you want uppercase letters in your password?"); 
  if (hasUppercase === true) { 
    alert("Password will have uppercase letters")
    
  } else if (hasUppercase !== true); { 
    allCharset !== uppercaseCharset;

  };
  
  hasLowercase=window.confirm ("Do you want lowercase letters in your password?")
  if (hasUppercase === true) { 
    alert("Password will have lowercase letters")
  } else { 
     allCharset !== lowercaseCharset;

  };

  hasSpecialcharacters=window.confirm ("Do you want special characters in your password?")
  if (hasSpecialcharacters===true) { 
    alert("Password will have special characters")
  } else if (hasSpecialcharacters !== true); { 
     allCharset !== specCharset;
  } 


  var index = Math.floor(Math.random() * allCharset.length);
  var answer = allCharset[index]; 
  console.log (answer);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 


  passwordText.value = password;

  
}  





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


