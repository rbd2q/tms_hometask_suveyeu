const sendRequest = require('./request.js');

function drawElems() {
  const containerBlock = document.createElement('div');
  containerBlock.classList.add('container');

  const titleBlock = document.createElement('h2');
  titleBlock.innerHTML = 'Cats';

  const imageBlock = document.createElement('img');
  imageBlock.id = 'image';

  document.body.append(containerBlock);
  containerBlock.append(titleBlock, imageBlock);
}
drawElems();

function changeImageOnClick() {
  document.addEventListener('click', () => {
    sendRequest();
  });
}
changeImageOnClick();

module.exports = drawElems;
