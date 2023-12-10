// make afunction that gets data
// params options and url






export 


async function getData (url , options) {
    

    const response = await fetch(url, options);
    const data = await response.json();

    return data;


}

// very unsure about this :( keep trying <3

function testFunction (blah){
    console.log (getData)
}

testFunction(getData);