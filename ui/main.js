console.log('Loaded!');

//change the text of the main-text div;
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move image
var img = document.getElementById('img');
img.onclick = function () {
    img.style.margineLeft = '100px';
};