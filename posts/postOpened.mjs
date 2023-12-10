import { apiBaseUrl } from '../api/url.mjs';
import { apiPostsEndpoint } from '../api/url.mjs';




const postContainer = document.querySelector(".post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idPost = params.get("id");
console.log(idPost);

const url = apiBaseUrl + apiPostsEndpoint + idPost;
console.log(url);

const token = localStorage.getItem('token');
console.log(token);





///////////////OPEN POST BY ID
///// use seperate function for building the post

/**
 * This function displays the specific post opened from feed, based on it's id 
 */

async function openPost() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await fetch(url, options);
    const json = await response.json();

    console.log("specific post:", json);

    const { title, body, media, tags } = json;

    postContainer.innerHTML = `<div class="post">
        <p class="post-title">${title}</p>
        <p class="post-body">${body}</p>
        <img class="post-media" src="${media}">
        <p>tags: ${tags} </p>
    </div>`



}
openPost();



/////////////// DELETE POST 

const buttonForDelete = document.querySelector('#delete');
buttonForDelete.addEventListener('click', deletePost);

/**
 * This post deletes the specific post opened and displayed on the page
 * it also tells the user the post was deleted
 */

async function deletePost() {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json === 204) {
            postContainer.innerHTML = `<div class="post">
                        <p class="post-title">You deleted your post successfully.</p>
                        <a href="feed.html">
                            <button>go back to feed</button>
                        </a>
                    </div>`
        }
    } catch (error) {
        console.log(error)
    }
};


///////////////// EDIT POST

//on clicking edit button
// form similar to make post apperas
// hard code form? no 
//do inner HTML and put form in , make sure post in inhabited with post values
// patch

//////// WHAT I NEED TO DO:
//PUT VALUES FROM POST INTO FORM?

// ELLER BARE GJØRE PUT?
// FØRST BARE GJØRE PUT!

// make post values into placeholders in edit form?
// do this at the same time as getting and displaying post by id?



/* 
const buttonForEdit = document.querySelector("#edit");
buttonForEdit.addEventListener('click', openEditForm); */




const formForUpdates = document.querySelector('#update-post');
console.log(formForUpdates);

formForUpdates.addEventListener('submit', collectFormInput);

async function collectFormInput(event) {

    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    console.log(informationPutIn);


    try {
        await updatePost(informationPutIn);
    } catch (error) {
        console.log(error)
    }
};


/**This function makes use of an object passed in, and updated an already existing post
 * the id is kept, but the values of the keys may be changed,
 * the window reloads on ok
 * 
 * @param {object} userInput 
 */
async function updatePost(userInput) {

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInput),
    }
    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json);
        console.log(response);

        if (response.ok) {
            window.location.reload();
        }

    } catch (error) {
        console.log(error)
    }

};





