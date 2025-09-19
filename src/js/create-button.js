'use strict';

console.log('>> Ready :)');

import domtoimage from 'dom-to-image';

const createButton = document.querySelector(".js-create");

createButton.addEventListener("click", (event) => {
    event.preventDefault();

   domtoimage
   .toJpeg(document.querySelector('.preview'), { quality: 0.95 })
    .then((dataUrl)=> {
        const link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    })
    .catch((error) => {
        console.error("Error creando la imagen:", error);
    });
    
});
