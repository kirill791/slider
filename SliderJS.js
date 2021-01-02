let lis = document.getElementsByTagName('li');
for(let i = 0; i<lis.length; i++){
    lis[i].style.position = 'relative';
    let span = document.createElement('span');
    span.style.cssText = 'position:absolute; left:0; top:0';
    span.innerHTML = 1;
    lis[i].appendChild(span)
}

let width = 720;
let count = 1;

let imageDiv = document.getElementById('imageDiv');
let list = imageDiv.querySelector('ul');
let listElements = imageDiv.querySelectorAll('li');

let position = 0;

imageDiv.querySelector('.prev').onclick = function(){

    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};

imageDiv.querySelector('.next').onclick = function(){
    position = Math.max(position - width * count, -width * (listElements.length - count));
    list.style.marginLeft = position + 'px';
};