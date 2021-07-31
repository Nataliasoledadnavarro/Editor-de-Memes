const botonImg = document.querySelector(".boton-imagen-nav");
const panelImg = document.getElementById("panel-img");

botonImg.onclick = () => {
  panelImg.style.width = "0";
};

//funcion de url imagen

const imagenMeme = document.getElementById("img-meme");
const urlInput = document.getElementById("url");

urlInput.oninput = () => {
  imagenMeme.src = urlInput.value;
};

// funcion picker de color

let inputColor = document.getElementById("color-fondo-img"); //selecciono el id de input
let textoColorFondo = document.querySelector(".texto-color-fondo-img"); //selecciono la clase del texto

const colorPicker = (event) => {
  textoColorFondo.textContent = event.target.value; //toma al valor del evento input y cambiale el contenido de texto a textoColorfondo (target: objetivo)
};

inputColor.addEventListener("input", colorPicker);

//funcion selector

const elementoSelector = document.getElementById("opciones-fondo-img"); //seleciono el sector

const seleccionUsuario = (event) => {
  if (event.target.value === "aclarar") {
    // debe de aplicar el filtro a la imagen con el color
  }
};

elementoSelector.addEventListener("change", seleccionUsuario); //escucho cuando se hace click en el sector

console.log(urlInput);

// Funciones Input de Rango

const brilloInput = document.getElementById("rango-brillo");
const opacidadInput = document.getElementById("rango-opacidad");
const contrasteInput = document.getElementById("rango-contraste");
const desenfoqueInput = document.getElementById("rango-desenfoque");
const escalaDeGrisesInput = document.getElementById("rango-grises");
const sepiaInput = document.getElementById("rango-sepia");
const rangoHue = document.getElementById("rango-hue");
const saturadoInput = document.getElementById("rango-saturado");
const negativoInput = document.getElementById("rango-negativo");

brilloInput.onchange = () => {
  imagenMeme.style.filter = "brightness(" + brilloInput.value + ")";
};

opacidadInput.onchange = () => {
  imagenMeme.style.filter = "opacity(" + opacidadInput.value + ")";
};

contrasteInput.onchange = () => {
  imagenMeme.style.filter = "contrast(" + contrasteInput.value + "%)";
};

desenfoqueInput.onchange = () => {
  imagenMeme.style.filter = "blur(" + desenfoqueInput.value + "px)";
};

escalaDeGrisesInput.oninput = () => {
  imagenMeme.style.filter = "grayscale(" + escalaDeGrisesInput.value + "%)";
};

sepiaInput.onchange = () => {
  imagenMeme.style.filter = "sepia(" + sepiaInput.value + "%)";
};

rangoHue.onchange = () => {
  imagenMeme.style.filter = "hue-rotate(" + rangoHue.value + "deg)";
};

saturadoInput.onchange = () => {
  imagenMeme.style.filter = "saturate(" + saturadoInput.value + "%)";
};

negativoInput.onchange = () => {
  imagenMeme.style.filter = "invert(" + negativoInput.value + ")";
};

// FUNCION BOTON REESTABLECER FILTROS

const reestablecerFiltros = document.querySelector(".reestablecer-filtros");

reestablecerFiltros.onclick = () => {
  brilloInput.value = "1";
  opacidadInput.value = "1";
  contrasteInput.value = "100";
  desenfoqueInput.value = "0";
  escalaDeGrisesInput.value = "0";
  sepiaInput.value = "0";
  rangoHue.value = "0";
  saturadoInput.value = "100";
  negativoInput.value = "0";
};
