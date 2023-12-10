import {apiBaseUrl} from '../api/url.mjs';
import {apiPostsEndpoint} from '../api/url.mjs';
import {buildPosts} from '../ui/posts.mjs';


const postsContainer = document.querySelector('.posts-container');
const searchBar = document.querySelector('#search');

const apiFilterEndpoint = "?_tag="
const tag = "";
const url = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;

const token = localStorage.getItem('token');

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
}



async function getData() {

    try {
        const respons = await fetch(url, options);
        const data = await respons.json();

        buildPosts(data , postsContainer);

    } catch (error) {
        console.log(error);
    }
};

getData();



async function searchPosts() {

    try {
        const respons = await fetch(url, options);
        const data = await respons.json();

        buildPosts(data, postsContainer);

        searchBar.onkeyup = function collectSearchInput(event) {
            const conditionFromInput = event.target.value.toLowerCase();

            const filteredPosts = data.filter((post) => {
                if (post.title.includes(conditionFromInput)){

                    return true;
                }
            });

            buildPosts(filteredPosts, postsContainer);
           
        }
    } catch (error) {
        console.log(error);
    }
};

searchPosts();




const heiInput = document.querySelector('#hei');
const testInput = document.querySelector('#test');
const noneInput = document.querySelector('#none');




/**This function makes an api call to an endpoint that returns certain posts
 * response is passed to function that builds posts from data
 * 
 * @param {string} url2 URL that matches whatever we are trying to filter by
 */

async function filterPosts(url2) {

    try {

        const respons = await fetch(url2, options);
        const data = await respons.json();

        buildPosts(data , postsContainer);

    } catch (error) {
        console.log(error);
    }
};


heiInput.onclick = function () {

    const tag = "hei";

    const filterURL = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;

    filterPosts(filterURL);

}


testInput.onclick = function () {

    const tag = "test";

    const filterURL = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;

    filterPosts(filterURL);

}

noneInput.onclick = function () {

    getData();
   
}



