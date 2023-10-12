const registerForm = document.querySelector("#register-form");
console.log(registerForm);

//got 201 with jsonplaceholder
//add real api
const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiRegisterEndpoint = "/social/auth/register";
const url = apiBaseUrl + apiRegisterEndpoint;
console.log(url);



function registerNewUser(userInput) {

    const optionsForRegistering = {
        method: 'POST',
        body: JSON.stringify(userInput),
    };

    fetch(url, optionsForRegistering);
   
    console.log(userInput);

}

function collectRegisterInput(event) {
    event.preventDefault();

    const usernamePutIn = document.querySelector('#register-username').value;
    const emailPutIn = document.querySelector('#register-email').value;
    const passwordPutIn = document.querySelector('#register-password').value;

    const informationPutIn = {
        name: usernamePutIn,
        email: emailPutIn,
        password: passwordPutIn,
    }

    registerNewUser(informationPutIn);

}

registerForm.addEventListener("submit", collectRegisterInput);


