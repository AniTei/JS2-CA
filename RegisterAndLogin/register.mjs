import {apiBaseUrl} from '../api/url.mjs';

const apiRegisterEndpoint = "/social/auth/register";
const url = apiBaseUrl + apiRegisterEndpoint;
console.log(url);

const publishForm = document.querySelector("#register-form");
publishForm.addEventListener("submit", collectLoginInput);




/**This function selects input from form on submit, 
 * created an objedt
 * and passes that object into another function that makes use of it
 * 
 * @param {*} event 
 * @example
 * ```js
 * // prevents refresh
    event.preventDefault();

// collects form input and turns it into an object
    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());
    
    try {
// passes new object into function to make use of it
        await registerUser(informationPutIn)

 * ```
 */

async function collectLoginInput(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    console.log(informationPutIn);
    

    try {

        await registerUser(informationPutIn)

    } catch (error) {
        console.log(error)
    }
}




// add async/await
// maybe move the url info?
// put fetch in variable
// what does returning the json do? 


/**Function makes use of an object to create a user in the api
 * 
 * @param {object} userInput objest with required information to create user
 * @example 
 * ```js
 * //options contains object to create user
    const optionsForRegistering = {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json",
        },
    };
// makes contact with api
    const response = await fetch(url, optionsForRegistering);
    const json = await response.json();

    console.log(response);
 * ```
 */
async function registerUser(userInput) {

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

