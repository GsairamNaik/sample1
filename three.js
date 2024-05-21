let inputElement = document.getElementById("InputElement");
let SignintextElement = document.getElementById("SignIntext");

function SignIn(){

   let inputValue = inputElement.value
   let verifyText = "Hi " + inputValue +" , "+ " Its Verifying....";
   SignintextElement.textContent = verifyText;

}
