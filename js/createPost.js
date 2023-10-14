//make it so 
//what is written into the form can be 
// sent to API and kept as an item in array
// so it can be displayed in feed

const formForNewPost = document.querySelector('#create-post');

console.log(formForNewPost);



/* 
const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiPostEndpoint = "/social/posts";
const url = apiBaseUrl + apiPostEndpoint; */



function abc(event) {
    event.preventDefault();
    console.log(formForNewPost[0].value)

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: "Today I noticed...",
            body: `"${formForNewPost[0].value}"`,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}


formForNewPost.addEventListener('submit', abc);


{
    "title": "string", // Required
    "body": "string", // Optional
    "tags": ["string"], // Optional
    "media": "https://url.com/image.jpg" // Optional
  }