////// User can filter the post content feed

const postsContainer = document.querySelector('.posts-container');

// postsContainer.innerHTML = `<div><p>Trollolol</p></div>`;


const apiBaseUrl = "https://api.noroff.dev/api/v1";

const apiFilterEndpoint = "/social/posts?_tag="

const tag = "";

const url = apiBaseUrl + apiFilterEndpoint + tag;

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

        console.log(data);

        postsContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            postsContainer.innerHTML += `<div class="post">
                    <p class="post-title">${data[i].title}</p>
                    <p class="post-body">${data[i].body}</p>
                    <img class="post-media" src="${data[i].media}">
                    <p>tags: ${data[i].tags} </p>
                    <div class="open">
                        <a href="post-opened.html?id=${data[i].id}" >
                        open
                        </a>
                    </div>
                </div>`;

                console.log("tags:" , `${data[i].tags} `)
        }
    } catch (error) {
        console.log(error);
    }
};

getPosts();




// a plan 
// pass in a tag into url based on what box is ticked?

// make html for tags
// html, You can filter the feed based on these categories
// radiobuttons
// ok so I have the skeleton, now I just need to do the filtering 


// we need an event for the filter functionality to be triggered, on click?
// i should probably make some posts with the tags that are relevant mtp filtering posts
// how


//log element
//log event

const heiInput = document.querySelector('#hei');
const testInput = document.querySelector('#test');
const noneInput = document.querySelector('#none');


async function getPosts2(url2) {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }

    try {

        const respons = await fetch(url2, options);
        const data = await respons.json();

        console.log(data);

        postsContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            postsContainer.innerHTML += `<div class="post">
                    <p class="post-title">${data[i].title}</p>
                    <p class="post-body">${data[i].body}</p>
                    <img class="post-media" src="${data[i].media}">
                    <p>tags: ${data[i].tags} </p>
                    <div class="open">
                        <a href="post-opened.html?id=${data[i].id}" >
                        open
                        </a>
                    </div>
                </div>`;

        }
    } catch (error) {
        console.log(error);
    }
};


heiInput.onclick = function () {

    const tag = "hei";

    const url2 = apiBaseUrl + apiFilterEndpoint + tag;

    console.log("hei?:" ,url2)

    getPosts2(url2);

    // i should have a seperate functions for seperate tasks! :((( puke
}


testInput.onclick = function () {



    console.log("test onclick");

    const tag = "test";

    const url2 = apiBaseUrl + apiFilterEndpoint + tag;

    console.log("test?:" ,url2)

    getPosts2(url2);

}

noneInput.onclick = function () {

    getPosts();
    
    console.clear();
    console.log("none onclick");
}


/* 

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
 */

// tanker
// filter, make new array, based on condition, 
// condition: does the object have a tag matching button selected
// or does the object have a tag matching the tag clicked?
// add: possibility to add tags?
// add: tags dispalyed on post 

// I need to use an array method to create a new array from the original one
// based on a condition
// the condition is, show every post containing a tag matching....
// what is the tag based on?? clicking, but clicking what? button or tag itself

// I have a question about the JS2 CA, 
// one of the required features is that the user can filter the feed
// what exacly is expected in that part?
// I sort of assumed the filtering should be done based on wether or not a post has a certain tag?

// im not sure I understand what I am supposed to do here




// is that an ok way to answer the requirement? is radio buttons smart? but
// Filter: show posts about dog, nature, food, 

// i am also having problems logging in to the media thingy, my own and other students
// i tried using my email and password i registered with some time ago, but 

// i cant remember when i logged in last , but my browser still holds a token so i didnt notoce at first,
// it was only when i tried to log in to an other students project that I noticed :((
    // wht do I do?

    // the blobby one works, but I probably shouldnt use that one?

