//make it so 
//what is written into the form can be 
// sent to API and kept as an item in array
// so it can be displayed in feed


import {apiBaseUrl} from '../url/url.mjs';
import {apiPostsEndpoint} from '../url/url.mjs';


const url = apiBaseUrl + apiPostsEndpoint;
console.log(url);

const token = localStorage.getItem('token');
console.log(token);

const publishForm = document.querySelector("#create-post");
publishForm.addEventListener("submit", collectFormInput);

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

/* return */;

try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    console.log(response);

/*     return;
 */
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










