const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img/image1.png","img/image2.png","img/image3.png","img/image4.png"];

myButton.addEventListener('click', changeImage);

function changeImage(){
    let randomIndex = Math.floor(Math.random() * images.length);//your code
    image.src=images[randomIndex]; /*your code*/ 
    console.log(randomIndex);
}


