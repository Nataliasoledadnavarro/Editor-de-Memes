// Boton imagen y Boton texto
const botonImg = document.querySelector(".boton-imagen-nav");
const botonTexto = document.querySelector(".boton-texto-nav");
const panelImg = document.getElementById("panel-img");
const panelTexto = document.getElementById("panel-texto");

const mostrarPanelTexto = () => {
  panelTexto.classList.remove("ocultar");
  panelImg.classList.add("ocultar");
};
const mostrarPanelImagen = () => {
  panelImg.classList.remove("ocultar");
  panelTexto.classList.add("ocultar");
};

botonTexto.onclick = mostrarPanelTexto;
botonImg.onclick = mostrarPanelImagen;

// Función ocultar panel con icono cruz
const iconoCruzImg = document.querySelector(".icono-cruz-img");
const iconoCruzTexto = document.querySelector(".icono-cruz-texto");

iconoCruzImg.onclick = () => {
  panelImg.classList.add("ocultar");
};

iconoCruzTexto.onclick = () => {
  panelTexto.classList.add("ocultar");
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
  aplicarFiltro(); //llama a la funcion que aplica los filtros
};

inputColor.addEventListener("input", colorPicker);

//funcion selector

const elementoSelector = document.getElementById("opciones-fondo-img"); //seleciono el sector
const contenedorDeImagen = document.querySelector(".imagen-src"); //seleccion del contenedor al q le aplico el fondo
const imagenFondo = document.querySelector(".imagen-fondo"); //seleciono la imagen
let seleccionDeFondo = " ";

const seleccionUsuario = (event) => {
  //if q comprueba la seleccion del usuario del select y lo guarda el nombre del filtro en la variable que luego se utiliza en la funcion aplicarFiltro
  if (event.target.value === "aclarar") {
    seleccionDeFondo = "lighten";
  } else if (event.target.value === "oscurecer") {
    seleccionDeFondo = "darken";
  } else if (event.target.value === "diferencia") {
    seleccionDeFondo = "difference";
  } else if (event.target.value === "luminosidad") {
    seleccionDeFondo = "luminosity";
  } else if (event.target.value === "multiplicar") {
    seleccionDeFondo = "multiply";
  } else {
    seleccionDeFondo = "normal";
  }

  aplicarFiltro(); //llamo a esta funcion que aplica los filtros
};

elementoSelector.addEventListener("change", seleccionUsuario); //escucho cuando cambia el selector y se ejecuta la funcion seleccionUsuario

let aplicarFiltro = () => {
  imagenFondo.style.mixBlendMode = seleccionDeFondo; //el mix necesita imagen y fondo
  contenedorDeImagen.style.backgroundColor = inputColor.value;
};

// Funciones Input de Rango

const brilloInput = document.getElementById("rango-brillo");
const opacidadInput = document.getElementById("rango-opacidad");
const contrasteInput = document.getElementById("rango-contraste");
const desenfoqueInput = document.getElementById("rango-desenfoque");
const escalaDeGrisesInput = document.getElementById("rango-grises");
const sepiaInput = document.getElementById("rango-sepia");
const hueInput = document.getElementById("rango-hue");
const saturadoInput = document.getElementById("rango-saturado");
const negativoInput = document.getElementById("rango-negativo");

const cambioFiltros = () => {
  imagenMeme.style.filter =
    "brightness(" +
    brilloInput.value +
    ")" +
    "opacity(" +
    opacidadInput.value +
    ")" +
    "contrast(" +
    contrasteInput.value +
    "%)" +
    "blur(" +
    desenfoqueInput.value +
    "px)" +
    "grayscale(" +
    escalaDeGrisesInput.value +
    "%)" +
    "sepia(" +
    sepiaInput.value +
    "%)" +
    "hue-rotate(" +
    hueInput.value +
    "deg)" +
    "saturate(" +
    saturadoInput.value +
    "%)" +
    "invert(" +
    negativoInput.value +
    ")";
};

brilloInput.addEventListener("change", cambioFiltros);
opacidadInput.addEventListener("change", cambioFiltros);
contrasteInput.addEventListener("change", cambioFiltros);
desenfoqueInput.addEventListener("change", cambioFiltros);
escalaDeGrisesInput.addEventListener("change", cambioFiltros);
sepiaInput.addEventListener("change", cambioFiltros);
hueInput.addEventListener("change", cambioFiltros);
saturadoInput.addEventListener("change", cambioFiltros);
negativoInput.addEventListener("change", cambioFiltros);

// FUNCION BOTON REESTABLECER FILTROS

const botonFiltros = document.querySelector(".reestablecer-filtros");

botonFiltros.onclick = (event) => {
  event.preventDefault();

  brilloInput.value = 1;
  opacidadInput.value = 1;
  contrasteInput.value = 100;
  desenfoqueInput.value = 0;
  escalaDeGrisesInput.value = 0;
  sepiaInput.value = 0;
  hueInput.value = 0;
  saturadoInput.value = 100;
  negativoInput.value = 0;

  imagenMeme.style.filter = "none";
};

// Boton descargar meme

const descargarMeme = document.getElementById("contenedor-imagen");
const botonDescarga = document.getElementById("boton-descargar");

botonDescarga.onclick = () => {
  domtoimage.toBlob(descargarMeme).then(function (blob) {
    window.saveAs(blob, "elmejormeme.png");
  });
};

//Funcion Texto Superior/Texto Inferior
const textoSuperiorUsuario = document.getElementById("superior");
const textoInferiorUsuario = document.getElementById("inferior");
const textoSuperior = document.querySelector(".texto-superior");
const textoInferior = document.querySelector(".texto-inferior");

textoSuperiorUsuario.oninput = () => {
  textoSuperior.textContent = textoSuperiorUsuario.value;
};
textoInferiorUsuario.oninput = () => {
  textoInferior.textContent = textoInferiorUsuario.value;
};

//Funcion Sacar Texto Superior e Inferior
const sinTextoSuperior = document.getElementById("sin-texto-superior");
const sinTextoInferior = document.getElementById("sin-texto-inferior");

sinTextoSuperior.oninput = () => {
  if (sinTextoSuperior.checked) {
    textoSuperior.style.display = "none";
  } else {
    textoSuperior.style.display = "flex";
  }
};
sinTextoInferior.oninput = () => {
  if (sinTextoInferior.checked) {
    textoInferior.style.display = "none";
  } else {
    textoInferior.style.display = "flex";
  }
};
