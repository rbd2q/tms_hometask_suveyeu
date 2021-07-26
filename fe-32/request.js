const requestURL = 'https://api.thecatapi.com/v1/images/search';

async function sendRequest() {
    try {
        const response = await fetch(requestURL);
        const picture = await response.json();
        document.getElementById('image').src = picture[0].url;
    }
    catch(error) {
        console.log(error);
    }
}
sendRequest();

module.exports = sendRequest;