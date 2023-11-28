//use method to copy array that is posts
//make new array from posts that fits condition
//display new array as search results

const postsContainer = document.querySelector('.posts-container');
const searchBar = document.querySelector('#search');

//vurder å bruke noe annet enn innerHTML??

const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiPostsEndpoint = "/social/posts";
const url = apiBaseUrl + apiPostsEndpoint;

const token = localStorage.getItem('token');





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
        }

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

            postsContainer.innerHTML = "";
            console.log (filteredPosts);

            for (let i = 0; i < data.length; i++) {
            postsContainer.innerHTML += `<div class="post">
                    <p class="post-title">${filteredPosts[i].title}</p>
                    <p class="post-body">${filteredPosts[i].body}</p>
                    <img class="post-media" src="${filteredPosts[i].media}">
                    <div class="open">
                        <a href="post-opened.html?id=${filteredPosts[i].id}">
                        open
                        </a>
                    </div>
                </div>`;
            }

            // error in line 67, filteredPosts is undefined?? But it works?

        }
    } catch (error) {
        console.log(error);
    }
};

getPosts();





//enough messing around, have a look at the on key up stuff js1 4.2

//what is event in the case of onkeyup? what is target, where is the place to make to lowercase, what if post is upper case?y 

// so we need to make the titles into lowercase aswell, 
//for there to best mulig match, for the input and the titles to be comparable , also maybe trim?


// in the function that filters, post will be the argument, because all posts need to be checked for given condition



// so we have a feed with posts

// what we want to do is filter the posts that show up, 
// based on the condition put into search bar
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
// Able to console log the contents of the search bar , 
//nope? it was just a console log??? nope it was the on key up :)))


// clean up!!! 
// one function should get data
// one should display data
// one should filter, triggered by input