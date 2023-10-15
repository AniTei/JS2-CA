const postContainer = document.querySelector(".post-container");
console.log(postContainer);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idPost = params.get("id");
console.log(idPost);

const apiBaseUrl = "https://api.noroff.dev/api/v1";
const singleEntryEndpoint = "/social/posts/";
const url = apiBaseUrl + singleEntryEndpoint + idPost;
console.log(url);

const token = localStorage.getItem('token');
console.log(token);


async function openPost () {
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
}

    const respons = await fetch(url, options);
    const json = await respons.json();

    console.log(json);

    postContainer.innerHTML = `<div class="post">
    
    <p>Today I noticed...</p>
    <p class="post-title">${json.title}</p>
    <p class="post-body">${json.body}</p>

    <img class="post-media" src="${json.media}">

    <div>edit</div>
    <div>delete</div>
</div>`

}

openPost();

