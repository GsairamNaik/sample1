let inputElement = document.getElementById("InputElement");
let SignintextElement = document.getElementById("SignIntext");

function SignIn(){

   let inputValue = inputElement.value
   let verifyText = "hi " + inputValue +" , "+ "Verifying....";
   SignintextElement.textContent = verifyText;

}