'use strict'
console.log("ready preview");

const preview = document.querySelector(".preview");
const previewMain = document.querySelector(".preview__main");

//ESCUCHADORAS DE "RELLENA"

const hostName = document.querySelector(".preview-main__host-name");
const message = document.querySelector(".preview-main__message");
const eventDate = document.querySelector(".preview__event-date");
const hostMail = document.querySelector(".preview__mail");
const hostPhone = document.querySelector(".preview__phone");
const hostAddress = document.querySelector(".preview__address");

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const fontSlider = document.querySelector(".js-font-size");
const fontFamily = document.querySelector(".js-font");
const fontColor = document.querySelector(".js-font-color");

inputMessage.value = localStorage.getItem("message");
message.textContent = localStorage.getItem("message");
inputName.value = localStorage.getItem("hostName");
hostName.textContent= localStorage.getItem("hostName");
inputDate.value = localStorage.getItem ("eventDate");

document.addEventListener("DOMContentLoaded", () => {
    const savedDate = localStorage.getItem("eventDate");    //Hay que hacerlo así para que la fecha se pinte "bien", es un
        if (savedDate) {                                    //evento que ocurre al cargar la página 
        inputDate.value = savedDate;
        formatDate(savedDate); 
    }
});

inputEmail.value = localStorage.getItem("hostMail");
hostMail.textContent = localStorage.getItem("hostMail");
inputPhone.value = localStorage.getItem ("hostPhone");
hostPhone.textContent = localStorage.getItem ("hostPhone");
inputAddress.value = localStorage.getItem ("hostAddress");
hostAddress.textContent = localStorage.getItem ("hostAddress");

previewMain.style.fontSize = localStorage.getItem("fontSize");
preview.style.fontFamily = localStorage.getItem("fontFamily");
preview.style.color = localStorage.getItem("color");
preview.style.backgroundImage = localStorage.getItem("background");



inputMessage.addEventListener("input", (event) => {
    message.textContent = event.target.value ;
    localStorage.setItem("message", event.target.value);
})
inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
    localStorage.setItem("hostName", event.target.value);
})
const formatDate = (date) => {
    if (date) {
        const [year, month, day] = date.split("-");
        const monthName = months[parseInt(month, 10)-1];
        eventDate.textContent = `${day}/${monthName}/${year}`;
    }else {
        eventDate.textContent = "";
    }
};
inputDate.addEventListener("input", (event) => {
    const selectedDate = event.target.value;
    formatDate(selectedDate);
    localStorage.setItem("eventDate", event.target.value);
})
inputEmail.addEventListener("input", (event) => {
    hostMail.textContent = event.target.value;
    localStorage.setItem("hostMail", event.target.value);
})
inputPhone.addEventListener("input", (event) => {
    hostPhone.textContent = event.target.value;
    localStorage.setItem("hostPhone", event.target.value);
})
inputAddress.addEventListener("input", (event) => {
    hostAddress.textContent = event.target.value;
    localStorage.setItem("hostAddress", event.target.value);
})

fontSlider.addEventListener("input", () => {
    const newSize = fontSlider.value;
    previewMain.style.fontSize = newSize + "px";
    localStorage.setItem("fontSize", newSize + "px")
});
fontFamily.addEventListener("change", (event) => {
    const selectedFont = event.target.value;
    preview.style.fontFamily = selectedFont;
    localStorage.setItem("fontFamily", selectedFont)
});

fontColor.addEventListener("input", (event) => {
    const newColor = event.target.value;
    preview.style.color = newColor;
    localStorage.setItem("color", newColor)
})

//AÑADIR FOTO

const handleClickPhoto = (event) => {
    if(event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            previewImage.src = event.target.result;
            previewImage.style.display = "block";
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    };

inputPhoto.addEventListener ("change", handleClickPhoto)