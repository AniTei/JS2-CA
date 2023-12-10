import {apiBaseUrl} from '../api/url.mjs';
import {apiPostsEndpoint} from '../api/url.mjs';
import {buildPosts} from '../ui/posts.mjs';

// make get data a seperate function :)


const postsContainer = document.querySelector('.posts-container');
const searchBar = document.querySelector('#search');


const apiFilterEndpoint = "?_tag="
const tag = "";
const url = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;
console.log(url);

const token = localStorage.getItem('token');
console.log(token);

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
}

/* /////////////




//ops her er det no jeg mp rydde i 

//i think i can use the url with the filter endpoint as long as the tag is empty
//////////// */




async function getData() {

    try {
        const respons = await fetch(url, options);
        const data = await respons.json();

        console.log("data recieved from API:", data);

        /* return data*/

        //read about callback functions ??

        /// how do i get something out of the function so i can display it?


        // it's better if one function does one thing, and then just call that function inside another function :)
        buildPosts(data , postsContainer);

        ///////////////this one works because i pass inn the container, and i need to do that because it is used in the function
        // but is selected in this document :)) make files talk to each other <3


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

    
        // make on key up into seperare function? 

        searchBar.onkeyup = function collectSearchInput(event) {
            const conditionFromInput = event.target.value.toLowerCase();

            console.log("event:", conditionFromInput);
        
            const filteredPosts = data.filter((post) => {
                if (post.title.includes(conditionFromInput)){

                    // remember lower case, trim, and maybe include rather than starts with
                    // oops something about making posts also lower case?
                    // next make them show up in feed :))
                    // first just make it work <3 then make it better <3
                    return true;
                }
            });

            buildPosts(filteredPosts, postsContainer);
            // error in line 67, filteredPosts is undefined?? But it works?

        }
    } catch (error) {
        console.log(error);
    }
};

searchPosts();




const heiInput = document.querySelector('#hei');
const testInput = document.querySelector('#test');
const noneInput = document.querySelector('#none');


async function filterPosts(url2) {

    try {

        const respons = await fetch(url2, options);
        const data = await respons.json();

        console.log(data);

        buildPosts(data , postsContainer);

    } catch (error) {
        console.log(error);
    }
};


heiInput.onclick = function () {

    const tag = "hei";

    const filterURL = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;

    console.log("hei?:", filterURL)

    filterPosts(filterURL);

    // i should have a seperate functions for seperate tasks! :((( puke
}


testInput.onclick = function () {

    console.log("test onclick");

    const tag = "test";

    const filterURL = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;

    console.log("test?:", filterURL)

    filterPosts(filterURL);

}

noneInput.onclick = function () {

    getData();
    console.clear();
    console.log("none onclick");
}



