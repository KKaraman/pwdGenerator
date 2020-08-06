//-----PSEUDO CODE-------  
//Prompt the user for the length of the password
//Confirm that the user wants to potentially have lowercase letters in the password
//confirm that the user wants to potentially have uppercase letters in the password
//confirm that the user wants to potentially have numeric characters in the password
//confirm that the user wants to potentially have special characters in the password
//based on the combination the user wants, generate password

//initialize the generateBtn element to reference the red button on screen
var generateBtn = document.getElementById("generate");
//listen for a click from the user to run function writePassword
generateBtn.addEventListener("click", writePassword);

var passwordText = document.querySelector("#password");
var lowerCaseChars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseChars=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChars=['1','2','3','4','5','6','7','8','9','0'];
var specialChars=['!','@','#','$','%','&','*','?','+'];
var password="";

//this function quality checks the inputs from the user to ensure that the request is meeting requirements
function writePassword() {

  var passwordLength = prompt("How many characters long would you like your password to be?");
  passwordLength = Math.floor(passwordLength); 
  console.log(passwordLength);
  if(passwordLength > 7 && passwordLength < 129){

    var lowChars = confirm("would you like your password to potentially have lower case letters?");
    var upChars = confirm("would you like your password to potentially have upper case letters?");
    var numChars = confirm("would you like your password to potentially have numeric characters?");
    var speChars = confirm("would you like your password to potentially have special characters?");
    console.log(lowChars);
    console.log(upChars);
    console.log(numChars);
    console.log(speChars);
  
    if(lowChars !== true && upChars !== true && numChars !==true && speChars!==true){
      alert("Your password cannot be generated.  Please select at least one character type.");
      writePassword();
    }
    else{
      generatePassword(passwordLength,lowChars,upChars,numChars,speChars);
      securityCountDown(password);
    }  
  }else{
    alert("Password length must be between 8 and 128 characters.");  
    writePassword();
  }
  // the security Count Down function keeps the password on the screen for only a selected period
  console.log(password);
}

function securityCountDown(password) {
  var timeLeft = 20;
  var timeInterval = setInterval(function() {
      
      if(timeLeft < 10){
        if(timeLeft % 2 === 0){
          passwordText.setAttribute("style", "fontSize:24px; color:red;");
        }else{
          passwordText.setAttribute("style", "fontSize:24px; color:red; background:black;");
        }
      }else{
          passwordText.setAttribute("style", "fontSize:24px; color:black");
      }  
      passwordText.textContent = password + "\n\nThis password will expire in " + timeLeft;
      timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      passwordText.setAttribute("style", "fontSize:24px; color:black; background:red;");
      passwordText.textContent = "\nDue to security reasons, \nthis password expired.";
      return;
    }
  }, 1000);
  
}

//this function generates a password composed of characters requested with the length requested
function generatePassword(passwordLength,lowChars,upChars,numChars,speChars){
  password = "";
  
  var t=0;
  //this loop will run until enough selected characters are added to meet the password length
  while(t < passwordLength){
      var arrayNum = Math.floor((Math.random() * 4));
      console.log(arrayNum);
      if(arrayNum===0 && lowChars ===true){
        password = password+getLowerLetter();
        t++;
      }
      if(arrayNum===1 && upChars===true){
        password = password+getUpperLetter();
        t++;
      }
      if(arrayNum===2 && numChars===true){
        password = password+getNumber();
        t++;
      }
      if(arrayNum===3 && speChars===true){
        password = password+getSpeChar();
        t++
      }
    }
    console.log(password);
    return password;
    
  }
//returns a single lower case letter
function getLowerLetter(){
  return lowerCaseChars[Math.floor((Math.random() * lowerCaseChars.length))];
}
//returns a single upper case letter
function getUpperLetter(){
  return upperCaseChars[Math.floor((Math.random() * upperCaseChars.length))];
}
//returns a single number 
function getNumber(){
  return numericChars[Math.floor((Math.random() * numericChars.length))];
}
//returns a signle special character
function getSpeChar(){
  return specialChars[Math.floor((Math.random() * specialChars.length))];
}