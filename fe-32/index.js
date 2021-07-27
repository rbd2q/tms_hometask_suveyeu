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
