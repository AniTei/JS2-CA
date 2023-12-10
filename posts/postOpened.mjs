import { apiBaseUrl } from '../api/url.mjs';
import { apiPostsEndpoint } from '../api/url.mjs';




const postContainer = document.querySelector(".post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idPost = params.get("id");

const url = apiBaseUrl + apiPostsEndpoint + idPost;

const token = localStorage.getItem('token');



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

    const { title, body, media, tags } = json;

    postContainer.innerHTML = `<div class="post">
        <p class="post-title">${title}</p>
        <p class="post-body">${body}</p>
        <img class="post-media" src="${media}">
        <p>tags: ${tags} </p>
    </div>`

}
openPost();




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






const formForUpdates = document.querySelector('#update-post');


formForUpdates.addEventListener('submit', collectFormInput);

async function collectFormInput(event) {

    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

 


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


        if (response.ok) {
            window.location.reload();
        }

    } catch (error) {
        console.log(error)
    }

};





