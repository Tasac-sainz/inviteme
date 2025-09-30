'use strict';

console.log('>> Ready :)');

// ------------------------------
// ELEMENTOS DOM
// ------------------------------

// Collapsables
const collapsibleHeaders = document.querySelectorAll(".collapsible__header");
const collapsibleContents = document.querySelectorAll(".collapsible__content");
const resetBtn = document.querySelector(".js-reset");

// Formulario - inputs
const inputName = document.getElementById("name");
const inputMessage = document.getElementById("message");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputDate = document.getElementById("date");
const inputAddress = document.getElementById("address");
const inputPhoto = document.getElementById("photo");
const previewImage = document.getElementById("preview-image");
const styleSelect = document.getElementById("style");
const backgroundsContainer = document.querySelector(".js-backgrounds");

// Sección de compartir
const downloadButton = document.querySelector(".js-download");
const resetButton = document.querySelector(".js-reset");
const formSubmitButton = document.querySelector(".js-create");


// Gestiona abrir/cerrar de los colapsables 
collapsibleHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
  });
});

// Fondos disponibles por estilo
const backgrounds = {
  boda: ["boda1.jpg", "boda2.jpg", "boda3.jpg", "boda4.jpg", "boda5.jpg", "boda6.jpg", "boda7.jpg"],
  cumple: ["cumple1.jpg", "cumple2.jpg", "cumple3.jpg"],
  networking: ["networking1.jpg", "networking2.jpg", "networking3.jpg"]
}
styleSelect.addEventListener("change", () => {
  const selectedStyle = styleSelect.value; // boda, cumple, networking
  const images = backgrounds[selectedStyle] || [];

  // limpiar contenedor antes de meter nuevas imágenes
  backgroundsContainer.innerHTML = "";

  // recorrer imágenes y pintarlas
  images.forEach(img => {
    const imgElement = document.createElement("img");
    imgElement.src = `./images/${selectedStyle}/${img}`; 
    imgElement.alt = selectedStyle;
    imgElement.classList.add("background-option");
    
    imgElement.addEventListener("click", () => {                  //He añadido este evento para que el fondo elegido se pinte también en preview
      preview.style.backgroundImage = `url(${imgElement.src})`;
      localStorage.setItem("background", preview.style.backgroundImage)
    });

    backgroundsContainer.appendChild(imgElement);
  });
});

const handleClickReset = (event) => {
    event.preventDefault();
    inputMessage.value = "";
    message.textContent = "";
    inputName.value = "";
    hostName.innerHTML = "";
    inputEmail.value = "";
    hostMail.textContent = "";
    inputPhone.value = "";
    hostPhone.textContent = "";
    inputDate.value = ""; 
    eventDate.textContent = "";
    hostAddress.textContent = "";
    inputAddress.value = ""; 
    hostAddress.textContent = ""; 
    inputPhoto.value = "";
    preview.style.backgroundImage = "";
    previewMain.style.fontSize = "";
    preview.style.fontFamily = "";
    preview.style.color = "";
    previewImage.src = "";
    previewImage.style.display = "none";

}
resetBtn.addEventListener ("click", handleClickReset);