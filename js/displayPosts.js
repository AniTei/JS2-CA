const postsContainer = document.querySelector('.posts-container');

postsContainer.innerHTML = `<div><p>Trollolol</p></div>`;
//vurder å bruke noe annet enn innerHTML



/* jeg vil ha pause :((( bismilla w allahu akbar w jihaad <3)))
se etter loren i pausen */


// GET posts(how many) to inhabit feed
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
        const json = await respons.json();

        console.log(json);

        for (let i = 0; i < json.length; i++) {

            postsContainer.innerHTML += `<div class="post">
    
                    <p>Today I noticed...</p>
                    <p class="post-title">${json[i].title}</p>
                    <p class="post-body">${json[i].body}</p>

                    <img class="post-media" src="${json[i].media}">

                    <div class="open">
                        
                        <a href="post-opened.html?id=${json[i].id}" >
                        open
                        </a>
                    </div>
                </div>`;
        }





    } catch (error) {
        console.log(error);
    }




    //loop 10 first????
    //include id so it can be passed to seperate page
};


getPosts();







/* 
async function getPosts() {

    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    },

const response = await fetch(url, options);
const json = await response.json();

console.log(json)

};

getPosts();
 */


/* `<div class="post">
    
                    <p>Today I noticed...</p>
                    <p class="post-title">${json[i].title}</p>
                    <p class="post-body">${json[i].body}</p>
                    <img class="post-media" src="${json[i].media}">
                    <div class="icons">
                        <i class="fa-solid fa-pencil"></i>
                        <i class="fa-solid fa-trash"></i>
                        <i class="fa-solid fa-up-right-from-square"></i>
                        <a href="specific-post.html?id=${json[i].id}">
                            <p class="button">read post</p>
                        </a>
                    </div>
                </div>` */