//use method to copy array that is posts
//make new array from posts that fit criterium
//display new array as seaarch result


const postsContainer = document.querySelector('.posts-container');
const searchBar = document.querySelector('#search');

//postsContainer.innerHTML = `<div><p>Trollolol</p></div>`;
//vurder å bruke noe annet enn innerHTML


// GET posts to inhabit feed
// display them


const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiPostsEndpoint = "/social/posts";
const url = apiBaseUrl + apiPostsEndpoint;

console.log(url);

const token = localStorage.getItem('token');
console.log(token);

async function getPosts() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }

    try {
        const respons = await fetch(url, options);
        const data = await respons.json();

        console.log("x:", data);

        for (let i = 0; i < data.length; i++) {
            postsContainer.innerHTML += `<div class="post">
                    <p class="post-title">${data[i].title}</p>
                    <p class="post-body">${data[i].body}</p>
                    <img class="post-media" src="${data[i].media}">
                    <div class="open">
                        <a href="post-opened.html?id=${data[i].id}">
                        open
                        </a>
                    </div>
                </div>`;
      


        searchBar.onkeyup = function collectSearchInput(event) {

            const conditionFromInput = event.target.value.toLowerCase();
        
            console.log("event:", conditionFromInput);
        
            //data er et problem, hvordan få tilgang på denne variabelen?
        
            const filteredPosts = data.filter((post) => {
                if (post.title.startsWith(conditionFromInput)){

                    //remember lower case, trim, and maybe include rather than starts with

                    // next make them show up in feed :))
                    // first just make it work <3 then make it better <3
                    return true;
                }

            });
        
            console.log (filteredPosts);
    
        
        }
  }
/* 
        const filteredNumbers = numbers.filter((number) => {
            if (number >= 3) {
              return true; */



        } catch (error) {
            console.log(error);
        }
    };

getPosts();


/////////////////





function testingFiltering() {
    console.log("running");

    postsContainer.innerHTML = "";

    // log posts that include an a?
}

testingFiltering();

/* 
    



/*

for (let i = 0; i < data.length; i++) {

    postsContainer.innerHTML += `<div class="post">
                        <p class="post-title">${data[i].title}</p>
                        <p class="post-body">${data[i].body}</p>
                        <img class="post-media" src="${data[i].media}">
                        <div class="open">
                            <a href="post-opened.html?id=${data[i].id}">
                            open
                            </a>
                        </div>
                    </div>`;

 */
                    

//////////////////////





/* function logSearchString ( ){

console.log(searchBar.value);

} */

//enough messing around, have a look at the on key up stuff js1 4.2

//what is event in the case of onkeyup? what is target, where is the place to make to lowercase, what if post is upper case?y 

// Now I need the original array, and to modify it based on a contition, which is matching the search input. 

// create variable called filtered posts, this variable will be an array of objects, generated using the filter method
// we get filteres posts by filtering the original array, based on the conditionInput from search

// so we need to make the titles into lowercase aswell, 
//for there to best mulig match, for the input and the titles to be comparable , also maybe trim?

// maybe state that the search searches the post titles.

// in the function that filters, post will be the argument, because all posts need to be checked for given condition

//mandag: I have made it so the input is selected, it is being logged

//now make it so it can be passed in as a condition in display function

//but first do filter, but with just a letter maybe, regardless og search,
//just do filter based on something hard coded :))








// so we have a feed with posts

// what we want to do is filter the posts that show up, 
// based on a condition, put into search bar
// make new array based on the original one, and the condition put in 
// the contition is letters,
// when letters match , include in new
// what sets it off, on key up
// when it is empty it is all posts



//Practical steps:

// 1 create html, search bar, form
// 2 select form
// 3 console log what is in the form :)))
// 4 select original array, apply filter to it
// 5 hardcode condition to test
// 6 pass in user condition


// progress
// Able to console log the contents of the search bar , nope? it was just a console log??? nope it was the on key up :)))


// clean up!!! 
// one function should get data
// one should display data
// one should filter, triggered by input