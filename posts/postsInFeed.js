const postsContainer = document.querySelector('.posts-container');

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
        const json = await respons.json();

        console.log(json);

        for (let i = 0; i < json.length; i++) {

            postsContainer.innerHTML += `<div class="post">
                    <p class="post-title">${json[i].title}</p>
                    <p class="post-body">${json[i].body}</p>
                    <img class="post-media" src="${json[i].media}">

                    <p>tags: ${json[i].tags} </p>
                    <div class="open">
                        <a href="post-opened.html?id=${json[i].id}">
                        open
                        </a>
                    </div>
                </div>`;
        }
    } catch (error) {
        console.log(error);
    }
};

getPosts();




