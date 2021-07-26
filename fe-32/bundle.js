(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const sendRequest = require ('./request.js');

function drawElems() {
    let containerBlock = document.createElement('div');
    containerBlock.classList.add('container');

    let titleBlock = document.createElement('h2');
    titleBlock.innerHTML = 'Cats';

    let imageBlock = document.createElement('img');
    imageBlock.id = 'image';

    document.body.append(containerBlock);
    containerBlock.append(titleBlock, imageBlock);
}
drawElems();


function changeImageOnClick() {
    document.addEventListener('click', () => {
        sendRequest();
    })
}
changeImageOnClick();

},{"./request.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
