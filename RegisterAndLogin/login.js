const apiBaseUrl = "https://api.noroff.dev/api/v1";
const apiRegisterEndpoint = "/social/auth/login";
const url = apiBaseUrl + apiRegisterEndpoint;

console.log(url);

const registerForm = document.querySelector("#login-form");
publishForm.addEventListener("submit", collectLoginInput);

async function collectLoginInput(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const informationPutIn = Object.fromEntries(formData.entries());

    try {
        await LoginUser(informationPutIn);
    } catch (error) {
        console.log(error);
    }
}




// add async/await
// maybe move the url info?
// put fetch in variable
// what does returning the json do? 



async function LoginUser(userInput) {

    const optionsForLogin = {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(url, optionsForLogin);
    const json = await response.json();

    console.log(response);
    console.log(json.accessToken);

    localStorage.setItem('token', json.accessToken);

    /* localStorage.clear();

    return; */

    if (response.ok) {

    

        function takeUserToFeed() {
            window.location.href = "posts/feed.html";
        }

        takeUserToFeed();
    }
}

// what to do with access token
// something abt putting it in local storage 
// if ok take user to feed
// but first
// store accessitem in order to retrieve it on diff pages?

// on success take user to feed






// do I also need to pass the token by a querysting? 