const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiRegisterEndpoint = "/social/auth/register";
const url = apiBaseUrl + apiRegisterEndpoint;
console.log(url);

const publishForm = document.querySelector("#register-form");
publishForm.addEventListener("submit", collectLoginInput);

async function collectLoginInput(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    console.log(informationPutIn);
    /* return; */

    try {
        await LoginUser(informationPutIn)
    } catch (error) {
        console.log(error)
    }
}




// add async/await
// maybe move the url info?
// put fetch in variable
// what does returning the json do? 



async function LoginUser(userInput) {

    console.log(userInput);

    const optionsForRegistering = {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(url, optionsForRegistering);
    const json = await response.json();

    console.log(response);


}

