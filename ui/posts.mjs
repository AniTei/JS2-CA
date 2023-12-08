// put the function for building the html in here


export function buildPosts(data , postsContainer) {

console.log ("buildPosts function is running");

    postsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        postsContainer.innerHTML += `<div class="post">
                    <p class="post-title">${data[i].title}</p>
                    <p class="post-body">${data[i].body}</p>
                    <img class="post-media" src="${data[i].media}">
                    <p>tags: ${data[i].tags} </p>
                    <div class="open">
                        <a href="post-opened.html?id=${data[i].id}">
                        open
                        </a>
                    </div>
                </div>`;
    }
};