
import { apiBaseUrl } from '../api/url.mjs';

const apiLoginEndpoint = "/social/auth/login";
const url = apiBaseUrl + apiLoginEndpoint;

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", collectLoginInput);






/**The function collects whatever input the user has put into the form
 * the input is then passed into a function that makes use of that information
 * 
 * @param {*} event User clicks login, submit
 * ```js
 * //prevents refresh
 *  event.preventDefault();

//form targeted by submit
// fordata turnes into object

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    try {

        //variable passe to a function that makes use of object
        await LoginUser(informationPutIn);
 * 
 * ```
 */
async function collectLoginInput(event) {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    try {

        await LoginUser(informationPutIn);

    } catch (error) {
        console.log(error);
    }
}



/**This functon makes use of an object and uses that informatoin to POST/login at api 
 * gets token back from api
 * if response is ok send user to feed (that requires token)
 * 
 * @param {object} userInput 
 * ```js
 *  
 * const response = await fetch(url, optionsForLogin);
    const json = await response.json();
//puts token recieved in local storage
    localStorage.setItem('token', json.accessToken);

// sends user to feed
    if (response.ok) {

        function takeUserToFeed() {
            window.location.href = "../posts/feed.html";
        }
        takeUserToFeed();
    }
 * 
 * ```
 */

async function LoginUser(userInput) {

    const optionsForLogin = {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json",
        },
    };


    const response = await fetch(url, optionsForLogin);
    const json = await response.json();

    localStorage.setItem('token', json.accessToken);


    /*    const token = localStorage.getItem('token');
    localStorage.clear();
      return; */

    if (response.ok) {

        function takeUserToFeed() {
            window.location.href = "../posts/feed.html";
        }
        takeUserToFeed();
    }
}


