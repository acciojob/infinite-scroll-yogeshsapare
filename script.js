//your code here!
const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random'

// get the images

function loadImages(numImages = 10){
   let i=0;
    while(i < numImages){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=>{
    // console.log(data.message)
    const img =  document.createElement('img');
    img.src = `${data.message}`
    container.appendChild(img)
    })
    i++;
    }   
    }

loadImages();
