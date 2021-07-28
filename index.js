const botonImg = document.querySelector(".boton-imagen-nav");
const panelImg = document.getElementById("panel-img");

botonImg.onclick = () => {
  panelImg.style.width = "0";
};

//funcion de url imagen arreglar en enter

const imagenMeme = document.getElementById("img-meme");
const urlInput = document.getElementById("url");

urlInput.onchange = () => {
  imagenMeme.src = urlInput.value;
};

console.log(urlInput);