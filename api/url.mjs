// vurder å legge token her også?




// fra register

/* const apiRegisterEndpoint = "/social/auth/register";
const url = apiBaseUrl + apiRegisterEndpoint;

// fra login

const apiRegisterEndpoint = "/social/auth/login";
const url = apiBaseUrl + apiRegisterEndpoint;

// fra post create

const url = apiBaseUrl + apiPostsEndpoint;

// fra post opened

const url = apiBaseUrl + apiPostsEndpoint + idPost;

// fra post feed

const apiFilterEndpoint = "?_tag="
const tag = "";
const url = apiBaseUrl + apiPostsEndpoint + apiFilterEndpoint + tag;
 */

// plan: slå sammen conster , de som er lik til en, eksportere, og bygge ny url const i den aktuelle filen

//progress

// apiBaseUrl is the same, ta den vekk fra de andre stedene
// men alle er jo social, jeg kunne lagt til det?
// eller bare legge det til etter hvert for det passer bedre med det som står i documentation


export const apiBaseUrl = "https://api.noroff.dev/api/v1";

export const apiPostsEndpoint = "/social/posts/";


// konklusjon, nå har jeg to variabler som kan imporeres?



