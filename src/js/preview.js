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

inputMessage.addEventListener("input", (event) => {
    message.textContent = event.target.value;
})
inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
})
inputDate.addEventListener("input", (event) => {
    const selectedDate = event.target.value;
    if (selectedDate) {
        const [year, month, day] = selectedDate.split("-");
        const monthName = months[parseInt(month, 10)-1];
        eventDate.textContent = `${day}/${monthName}/${year}`;
    }else {
        eventDate.textContent = "";
    }
})
inputEmail.addEventListener("input", (event) => {
    hostMail.textContent = event.target.value;
})
inputPhone.addEventListener("input", (event) => {
    hostPhone.textContent = event.target.value;
})
inputAddress.addEventListener("input", (event) => {
    hostAddress.textContent = event.target.value;
})

fontSlider.addEventListener("input", () => {
    const newSize = fontSlider.value;
    previewMain.style.fontSize = newSize + "px";
});
fontFamily.addEventListener("change", (event) => {
    const selectedFont = event.target.value;
    preview.style.fontFamily = selectedFont;
});

fontColor.addEventListener("input", (event) => {
    const newColor = event.target.value;
    preview.style.color = newColor;
})