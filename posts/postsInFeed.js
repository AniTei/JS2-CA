
const postsContainer = document.querySelector('.posts-container');
const searchBar = document.querySelector('#search');

const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiPostsEndpoint = "/social/posts";
const url = apiBaseUrl + apiPostsEndpoint;

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


function buildPosts(data) {

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

async function getData() {

    try {
        const respons = await fetch(url, options);
        const data = await respons.json();

        console.log("data recieved from API:", data);

        /* return data*/

        //read about callback functions ??

        /// how do i get something out of the function so i can display it?


        // it's better if one function does one thing, and then just call that function inside another function :)
        buildPosts(data);


    } catch (error) {
        console.log(error);
    }
};

getData();




async function searchData() {

    try {
        const respons = await fetch(url, options);
        const data = await respons.json();

        buildPosts(data);

    

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

            buildPosts(filteredPosts);

            // error in line 67, filteredPosts is undefined?? But it works?

        }
    } catch (error) {
        console.log(error);
    }
};

searchData();