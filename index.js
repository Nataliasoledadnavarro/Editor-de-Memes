// Boton imagen y Boton texto
const botonImg = document.querySelector('.boton-imagen-nav');
const botonTexto = document.querySelector('.boton-texto-nav');
const panelImg = document.getElementById('panel-img');
const panelTexto = document.getElementById('panel-texto');

const mostrarPanelTexto = () => {
  panelTexto.classList.remove('ocultar');
  panelImg.classList.add('ocultar');
};
const mostrarPanelImagen = () => {
  panelImg.classList.remove('ocultar');
  panelTexto.classList.add('ocultar');
};

botonTexto.onclick = mostrarPanelTexto;
botonImg.onclick = mostrarPanelImagen;

//funcion de url imagen

const imagenMeme = document.getElementById('img-meme');
const urlInput = document.getElementById('url');

urlInput.oninput = () => {
  imagenMeme.src = urlInput.value;
};

// funcion picker de color

let inputColor = document.getElementById('color-fondo-img'); //selecciono el id de input
let textoColorFondo = document.querySelector('.texto-color-fondo-img'); //selecciono la clase del texto

const colorPicker = (event) => {
  textoColorFondo.textContent = event.target.value; //toma al valor del evento input y cambiale el contenido de texto a textoColorfondo (target: objetivo)
  aplicarFiltro(); //llama a la funcion que aplica los filtros
};

inputColor.addEventListener('input', colorPicker);

//funcion selector

const elementoSelector = document.getElementById('opciones-fondo-img'); //seleciono el sector
const contenedorDeImagen = document.querySelector('.imagen-src'); //seleccion del contenedor al q le aplico el fondo
const imagenFondo = document.querySelector('.imagen-fondo'); //seleciono la imagen
let seleccionDeFondo = ' ';

const seleccionUsuario = (event) => {
  //if q comprueba la seleccion del usuario del select y lo guarda el nombre del filtro en la variable que luego se utiliza en la funcion aplicarFiltro
  if (event.target.value === 'aclarar') {
    seleccionDeFondo = 'lighten';
  } else if (event.target.value === 'oscurecer') {
    seleccionDeFondo = 'darken';
  } else if (event.target.value === 'diferencia') {
    seleccionDeFondo = 'difference';
  } else if (event.target.value === 'luminosidad') {
    seleccionDeFondo = 'luminosity';
  } else if (event.target.value === 'multiplicar') {
    seleccionDeFondo = 'multiply';
  } else {
    seleccionDeFondo = 'normal';
  }

  aplicarFiltro(); //llamo a esta funcion que aplica los filtro
};

elementoSelector.addEventListener('change', seleccionUsuario); //escucho cuando cambia el sector y se ejecuta la funcion seleccionUsuario

let aplicarFiltro = () => {
  imagenFondo.style.mixBlendMode = seleccionDeFondo; //el mix necesita imagen y fondo
  contenedorDeImagen.style.backgroundColor = inputColor.value;
};

// Funciones Input de Rango

const brilloInput = document.getElementById('rango-brillo');
const opacidadInput = document.getElementById('rango-opacidad');
const contrasteInput = document.getElementById('rango-contraste');
const desenfoqueInput = document.getElementById('rango-desenfoque');
const escalaDeGrisesInput = document.getElementById('rango-grises');
const sepiaInput = document.getElementById('rango-sepia');
const rangoHue = document.getElementById('rango-hue');
const saturadoInput = document.getElementById('rango-saturado');
const negativoInput = document.getElementById('rango-negativo');

brilloInput.onchange = () => {
  imagenMeme.style.filter = 'brightness(' + brilloInput.value + ')';
};

opacidadInput.onchange = () => {
  imagenMeme.style.filter = 'opacity(' + opacidadInput.value + ')';
};

contrasteInput.onchange = () => {
  imagenMeme.style.filter = 'contrast(' + contrasteInput.value + '%)';
};

desenfoqueInput.onchange = () => {
  imagenMeme.style.filter = 'blur(' + desenfoqueInput.value + 'px)';
};

escalaDeGrisesInput.oninput = () => {
  imagenMeme.style.filter = 'grayscale(' + escalaDeGrisesInput.value + '%)';
};

sepiaInput.onchange = () => {
  imagenMeme.style.filter = 'sepia(' + sepiaInput.value + '%)';
};

rangoHue.onchange = () => {
  imagenMeme.style.filter = 'hue-rotate(' + rangoHue.value + 'deg)';
};

saturadoInput.onchange = () => {
  imagenMeme.style.filter = 'saturate(' + saturadoInput.value + '%)';
};

negativoInput.onchange = () => {
  imagenMeme.style.filter = 'invert(' + negativoInput.value + ')';
};

// FUNCION BOTON REESTABLECER FILTROS

//CHEQUEAR COMO MODIFICAR QUE NO BORRE LA IMG

const reestablecerFiltros = document.querySelector('.reestablecer-filtros');

reestablecerFiltros.onclick = () => {
  brilloInput.value = '1';
  opacidadInput.value = '1';
  contrasteInput.value = '100';
  desenfoqueInput.value = '0';
  escalaDeGrisesInput.value = '0';
  sepiaInput.value = '0';
  rangoHue.value = '0';
  saturadoInput.value = '100';
  negativoInput.value = '0';
};

// Boton descargar meme

const descargarMeme = document.querySelector('.conteiner-imagen');
const botonDescarga = document.querySelector('.descargar');

botonDescarga.onclick = () => {
  domtoimage.toBlob(descargarMeme).then(function (blob) {
    window.saveAs(blob, 'elmejormeme.png');
  });
};
// FORMULARIO - TEXTO COLOR Y FONDO 
// COLOR 

let inputColorFormTexto = document.getElementById("input-color"); 
let colorFondoFormTexto = document.querySelector("input-fondo"); 

const colorFormTexto = (event) => {
  inputColorFormTexto.textContent = event.target.value; 
  aplicarFiltro(); //llama a la funcion que aplica los filtros
};

inputColorFormTexto.addEventListener("input", colorFormTexto);

let aplicarFiltro = () => {
  imagenFondo.style.mixBlendMode = seleccionDeFondo; //el mix necesita imagen y fondo
  contenedorDeImagen.style.backgroundColor = inputColor.value;
};

//FONDO TRANSPARENTE CHECKBOX

let fondoTransparenteSup = document.querySelector(".texto-superior")
let fondoTransparenteInf = document.querySelector(".texto-inferior")

const fondoTransparente = (event) => {
  fondoTransparenteSup.remove = event.target; //ver si funciona remove para quitar el estilo 
  aplicarTransparencia ();
}

fondoTransparenteSup.addEventListener("target", fondoTransparente);

//textoSuperior es el nombre de la variable sugerida en la primer parte del formulario que se usaria para el fondo transparente
let aplicarTransparencia = () =>{
  textoSuperior.style.backgroundColor= superiorColor; //superiorColor es la funcion que se deberia usar para darle los estilos en texto superior
}

//Funcion Texto Superior/Texto Inferior
const textoSuperiorUsuario = document.getElementById('superior');
const textoInferiorUsuario = document.getElementById('inferior');
const textoSuperior = document.querySelector('.texto-superior');
const textoInferior = document.querySelector('.texto-inferior');

textoSuperiorUsuario.oninput = () => {
  textoSuperior.textContent = textoSuperiorUsuario.value;
};
textoInferiorUsuario.oninput = () => {
  textoInferior.textContent = textoInferiorUsuario.value;
};
//Funcion Sacar Texto Superior e Inferior
const sinTextoSuperior = document.getElementById('sin-texto-superior');
const sinTextoInferior = document.getElementById('sin-texto-inferior');

sinTextoSuperior.oninput = () => {
  if (sinTextoSuperior.checked) {
    textoSuperior.style.display = 'none';
  } else {
    textoSuperior.style.display = 'flex';
  }
};
sinTextoInferior.oninput = () => {
  if (sinTextoInferior.checked) {
    textoInferior.style.display = "none";
  } else {
    textoInferior.style.display = 'flex';
  }
};



