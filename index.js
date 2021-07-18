const requestURL = 'https://api.thecatapi.com/v1/images/search';
const image = document.createElement('img');
const container = document.getElementById('container');


async function sendRequest() {
    try {
        const response = await fetch(requestURL);
        const picture = await response.json();
        const url = picture[0].url;
        container.append(image);
        image.src = url;
    }
    catch(error) {
        console.log(error);
    }
}
sendRequest();

document.addEventListener('click', () => {
    sendRequest();
})