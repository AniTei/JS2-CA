const postsContainer = document.querySelector('.posts-container');

postsContainer.innerHTML = `<div><p>Trollolol</p></div>`;
//vurder å bruke noe annet enn innerHTML

console.log("hei feed, nå skal jeg get posts fra appppppiiii")




// GET posts(how many) to inhabit feed
// display them


const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiFilterEndpoint = "/social/posts?_tag="
const tag = "ja";
const active = "&_active=true";
const url = apiBaseUrl + apiFilterEndpoint + tag + active;

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




