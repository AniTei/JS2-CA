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

    console.log(json);

    postContainer.innerHTML = `<div class="post">
    
    <p class="post-title">${json.title}</p>
    <p class="post-body">${json.body}</p>

    <img class="post-media" src="${json.media}">

</div>`

}

openPost();


/////////////// DELETE POST

// SELECT ELEMENT
// WHEN DELETE IS CLICKED , LITEN FOR CLICK, START FUNCTION
// FUNCTION TELLS API TO DELETE POST BY ID
// when success take user back to feed?
// if succsess > give message
// no, message, the post was deleted, go back to feed
// 

const buttonForDelete = document.querySelector('#delete');

buttonForDelete.addEventListener('click', deletePost);

async function deletePost() {
    console.log("testing delete button")
    console.log(url)

    const options = {
        method: 'DELETE',

        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }

    /* return */;

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

      /*   return; */

      if(json === 204) {
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


