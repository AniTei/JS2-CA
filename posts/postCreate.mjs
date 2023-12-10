//make it so 
//what is written into the form can be 
// sent to API and kept as an item in array
// so it can be displayed in feed


import {apiBaseUrl} from '../api/url.mjs';
import {apiPostsEndpoint} from '../api/url.mjs';


const url = apiBaseUrl + apiPostsEndpoint;
console.log(url);

const token = localStorage.getItem('token');
console.log(token);

const publishForm = document.querySelector("#create-post");
publishForm.addEventListener("submit", collectFormInput);




/** This function collects the information put into a form
 * and makes it into an object
 * to be used in an other function
 * 
 * @param {*} event on submit the function runs
 * @example 
 * ```js
 * //prevents refresh
 *     event.preventDefault();
// collects input and makes it into object
    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    try {

        //passes object ito function to make use of it
        await sendPost(informationPutIn);
 * 
 * ```
 */

async function collectFormInput(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    console.log(informationPutIn);

    /* return */;

    try {
        await sendPost(informationPutIn);
    } catch (error) {
        console.log(error)
    }

};


/** This function creates a new post from object passed in
 * 
 * @param {object} userInput object passed in, turns into post
 * @example
 * ```js
 * // object is put into option, also token, POST
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInput),

}

try {

    //fetch made to api with given options
    const response = await fetch(url, options);
    const data = await response.json();

   
// depending on response, user is taken to feed to see their new post in the feed
    if (response.ok) {

        function takeUserToFeed() {
            window.location.href = "feed.html";
        }

        takeUserToFeed();
    }

}
 * ```
 */

async function sendPost(userInput) {

    console.log(userInput);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInput),

}


try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    console.log(response);

    if (response.ok) {

        function takeUserToFeed() {
            window.location.href = "feed.html";
        }

        takeUserToFeed();
    }

}
catch (error) {
    console.log(error);
}
};


/* {
    "title": "string", // Required
    "body": "string", // Optional
    "tags": ["string"], // Optional
    "media": "https://url.com/image.jpg" // Optional
  } */


////////////////










