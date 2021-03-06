///////////////////////////FUNCIONES DEL MAIN////////////////////////////////////////

// Boton descargar meme

const descargarMeme = document.getElementById("contenedor-imagen");
const botonDescarga = document.getElementById("boton-descargar");

botonDescarga.onclick = () => {
  domtoimage.toBlob(descargarMeme).then(function (blob) {
    saveAs(blob, "el-mejor-meme.png");
  });
};

///////////////////////////FUNCIONES BOTON IMAGEN Y TEXTO//////////////////////////////

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
const botonCerrarMenuImagen = document.querySelector(
  ".boton-cerrar-menu-imagen"
);
const botonCerrarMenuTexto = document.querySelector(".boton-cerrar-menu-texto");

botonCerrarMenuImagen.onclick = () => {
  panelImg.classList.add("ocultar");
};

botonCerrarMenuTexto.onclick = () => {
  panelTexto.classList.add("ocultar");
};

///////////////////////////FUNCIONES DEL FORMULARIO IMAGEN///////////////////////////////

//URL

const imagenMeme = document.getElementById("img-meme");
const urlInput = document.getElementById("url");

urlInput.oninput = () => {
  imagenMeme.src = urlInput.value;
};

// PICKER COLOR

let inputColor = document.getElementById("color-fondo-img");
let textoColorFondo = document.querySelector(".texto-color-fondo-img");

const colorPicker = (event) => {
  textoColorFondo.textContent = event.target.value;
  aplicarFiltro();
};

inputColor.addEventListener("input", colorPicker);

//SELECT COLOR FONDO

const elementoSelector = document.getElementById("opciones-fondo-img");
const contenedorDeImagen = document.querySelector(".imagen-src");
const imagenFondo = document.querySelector(".imagen-fondo");

let seleccionDeFondo = "";

const seleccionUsuario = (event) => {
  seleccionDeFondo = event.target.value;
  aplicarFiltro();
};

elementoSelector.addEventListener("change", seleccionUsuario);

let aplicarFiltro = () => {
  imagenFondo.style.mixBlendMode = seleccionDeFondo;
  contenedorDeImagen.style.backgroundColor = inputColor.value;
};

// INPUTS DE RANGO

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
  imagenMeme.style.filter = `brightness(${brilloInput.value})
  opacity(${opacidadInput.value})   contrast(${contrasteInput.value}%)
  blur(${desenfoqueInput.value}px)
  grayscale(${escalaDeGrisesInput.value}%)
  sepia(${sepiaInput.value}%)  
  hue-rotate(${hueInput.value}deg)
  saturate(${saturadoInput.value}%)
  invert(${negativoInput.value})`;
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

//BOTON REESTABLECER FILTROS

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

///////////////////////////FUNCIONES DEL DORMULARIO TEXTO////////////////////////////////

//INGRESAR TEXTO SUPERIOR E INFERIOR
const textoSuperiorUsuario = document.getElementById("superior");
const textoInferiorUsuario = document.getElementById("inferior");
const textoSuperior = document.querySelector(".texto-superior");
const textoInferior = document.querySelector(".texto-inferior");

textoSuperiorUsuario.oninput = () => {
  parrafoSuperior.textContent = textoSuperiorUsuario.value;
};
textoInferiorUsuario.oninput = () => {
  parrafoInferior.textContent = textoInferiorUsuario.value;
};

//ELIMINAR TEXTO SUPERIOR Y/O INFERIOR
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

//CAMBIO DE FUENTES

const selectFuentes = document.getElementById("tipos-de-fuentes");

const cambiarFuentes = (event) => {
  textoSuperior.style.fontFamily = event.target.value;
  textoInferior.style.fontFamily = event.target.value;
};
selectFuentes.addEventListener("change", cambiarFuentes);

// TAMAÑO DE LA LETRA
const tamanioLetra = document.getElementById("tamanio-letra");

tamanioLetra.oninput = () => {
  textoSuperior.style.fontSize = tamanioLetra.value + "px";
  textoInferior.style.fontSize = tamanioLetra.value + "px";
};

// ALINEACIÓN DEL PARRAFO

const alineacionIzquierda = document.getElementById("boton-izquierda");
const alineacionCentro = document.getElementById("boton-centrado");
const alineacionDerecha = document.getElementById("boton-derecha");

alineacionIzquierda.onclick = (event) => {
  event.preventDefault();
  textoSuperior.style.justifyContent = "flex-start";
  textoInferior.style.justifyContent = "flex-start";
};
alineacionCentro.onclick = (event) => {
  event.preventDefault();
  textoSuperior.style.justifyContent = "center";
  textoInferior.style.justifyContent = "center";
};
alineacionDerecha.onclick = (event) => {
  event.preventDefault();
  textoSuperior.style.justifyContent = "flex-end";
  textoInferior.style.justifyContent = "flex-end";
};

// COLOR Y FONDO
let parrafoInferior = document.querySelector(".parrafo-inferior");
let parrafoSuperior = document.querySelector(".parrafo-superior");

let inputFondoTexto = document.getElementById("input-color-fondo");
let inputColorTexto = document.getElementById("input-color-texto");

let spanColorTexto = document.querySelector(".span-color-texto");
let spanFondoTexto = document.querySelector(".span-fondo-texto");

const codigoDeColor = (event) => {
  spanColorTexto.textContent = event.target.value;
};
inputColorTexto.oninput = (event) => {
  spanColorTexto.textContent = event.target.value;
};

// APLICAR EL COLOR DE LA LETRA

const cambiarColorTexto = () => {
  parrafoSuperior.style.color = inputColorTexto.value;
  parrafoInferior.style.color = inputColorTexto.value;
};

inputColorTexto.addEventListener("input", cambiarColorTexto);

//APLICAR EL COLOR DE FONDO

const cambiarColorFondoTexto = () => {
  textoSuperior.style.backgroundColor = inputFondoTexto.value;
  textoInferior.style.backgroundColor = inputFondoTexto.value;
};

inputFondoTexto.addEventListener("input", cambiarColorFondoTexto);

//FONDO TRANSPARENTE
let checkboxTransparente = document.getElementById("fondo-transparente");

checkboxTransparente.oninput = () => {
  if (checkboxTransparente.checked) {
    textoSuperior.style.position = "relative";
    textoInferior.style.position = "relative";
    textoSuperior.style.height = "0";
    textoInferior.style.height = "0";
    parrafoSuperior.style.position = "absolute";
    parrafoInferior.style.position = "absolute";
    parrafoSuperior.style.top = "0";
    parrafoInferior.style.bottom = "0";
  } else {
    textoSuperior.style.position = "static";
    textoInferior.style.position = "static";
    textoSuperior.style.height = "";
    textoInferior.style.height = "";
    parrafoSuperior.style.position = "static";
    parrafoInferior.style.position = "static";
    parrafoSuperior.style.top = "";
    parrafoInferior.style.bottom = "";
  }
};

// CONTORNOS

let botonNinguno = document.getElementById("ninguno");
let botonClaro = document.getElementById("claro");
let botonOscuro = document.getElementById("oscuro");

botonNinguno.onclick = (event) => {
  event.preventDefault();
  parrafoSuperior.style.textShadow = "none";
  parrafoInferior.style.textShadow = "none";
};

botonClaro.onclick = (event) => {
  event.preventDefault();
  parrafoSuperior.style.textShadow = "2px 2px 2px white";
  parrafoInferior.style.textShadow = "2px 2px 2px white";
};

botonOscuro.onclick = (event) => {
  event.preventDefault();
  parrafoSuperior.style.textShadow = "2px 2px 2px black";
  parrafoInferior.style.textShadow = "2px 2px 2px black";
};

// ESPACIADO

let espaciadoTexto = document.getElementById("espaciado");
espaciadoTexto.oninput = () => {
  textoSuperior.style.padding = espaciadoTexto.value + "px";
  textoInferior.style.padding = espaciadoTexto.value + "px";
};
// INTERLINEADO

let interlineadoTexto = document.getElementById("interlineado");
interlineadoTexto.oninput = () => {
  textoSuperior.style.lineHeight = interlineadoTexto.value;
  textoInferior.style.lineHeight = interlineadoTexto.value;
};

//MODO OSCURO-CLARO

// No esta mal como resolvieron el cambio de modo, pero habria sido muchiiiiiisimo mas breve
// si le daban una clase al body y en el css hacian por ejemplo

// header {

// }

// .modo-oscuro header {

// }

const botonModoOscuro = document.getElementById("boton-modo-oscuro"); //boton

//body
const fondoBody = document.querySelector("body");
const fondoHeader = document.querySelector("header");
const tituloPrincipal = document.querySelector("h1");
const botonesNav = document.querySelector("nav");
const panelFondo = document.querySelector("#panel-img"); //aside
const panelTextoModoClaro = document.querySelector("#panel-texto"); //aside

//llamado a elementos para fuentes modo claro
const tituloFormularioImg = document.querySelector("#titulo-formulario-imagen"); //formulario imagen
const tituloFondoImagen = document.querySelector("#titulo-fondo-img");
const tituloFiltros = document.querySelector("#titulo-filtros");
const tituloFormularioTexto = document.querySelector(
  "#titulo-formulario-texto"
); //formulario texto
const tituloTextoSuperior = document.querySelector("#titulo-texto-superior");
const tituloTextoInferior = document.querySelector("#titulo-texto-inferior");
const tituloFuente = document.querySelector("#titulo-fuente");
const tituloColor = document.querySelector("#titulo-color");
const tituloFondo = document.querySelector("#titulo-fondo");
const tituloContorno = document.querySelector("#titulo-contorno");
const tituloEspaciado = document.querySelector("#titulo-espaciado");
const tituloInterlineado = document.querySelector("#titulo-interlineado");
const botonCierraMenuTexto = document.querySelector("#cerrar-menu-texto-claro"); //boton cierra menu imagen
const btonCierraMenuImagen = document.querySelector(
  "#cerrar-menu-imagen-claro"
);

//labels
const labelUrl = document.querySelector("#label-url"); //formulario imagen
const labelBrillo = document.querySelector("#label-brillo");
const labelOpacidad = document.querySelector("#label-opacidad");
const labelContraste = document.querySelector("#label-contraste");
const labelDesenfoque = document.querySelector("#label-desenfoque");
const labelEscalaGrises = document.querySelector("#label-escala-grises");
const labelSepia = document.querySelector("#label-sepia");
const labelHue = document.querySelector("#label-hue");
const labelSaturado = document.querySelector("#label-saturado");
const labelNegativo = document.querySelector("#label-negativo");
const labelCheckboxSuperior = document.querySelector(
  "#label-checkbox-superior"
); //formulario texto
const labelCheckboxInferior = document.querySelector(
  "#label-checkbox-inferior"
);
const labelCheckboxFondoTransparente = document.querySelector(
  "#label-checkbox-fondo-transparente"
);

const fuentesModoClaro = () => {
  tituloFormularioImg.classList.toggle("fuentes-modo-claro");
  tituloFondoImagen.classList.toggle("fuentes-modo-claro");
  tituloFiltros.classList.toggle("fuentes-modo-claro");
  tituloFormularioTexto.classList.toggle("fuentes-modo-claro");
  tituloTextoSuperior.classList.toggle("fuentes-modo-claro");
  tituloTextoInferior.classList.toggle("fuentes-modo-claro");
  tituloFuente.classList.toggle("fuentes-modo-claro");
  tituloColor.classList.toggle("fuentes-modo-claro");
  tituloFondo.classList.toggle("fuentes-modo-claro");
  tituloContorno.classList.toggle("fuentes-modo-claro");
  tituloEspaciado.classList.toggle("fuentes-modo-claro");
  tituloInterlineado.classList.toggle("fuentes-modo-claro");
};

const cambiarClaseLabels = () => {
  labelUrl.classList.toggle("clase-labels");
  labelCheckboxSuperior.classList.toggle("clase-labels");
  labelCheckboxInferior.classList.toggle("clase-labels");
  labelCheckboxFondoTransparente.classList.toggle("clase-labels");
  labelBrillo.classList.toggle("clase-labels");
  labelOpacidad.classList.toggle("clase-labels");
  labelContraste.classList.toggle("clase-labels");
  labelDesenfoque.classList.toggle("clase-labels");
  labelEscalaGrises.classList.toggle("clase-labels");
  labelSepia.classList.toggle("clase-labels");
  labelHue.classList.toggle("clase-labels");
  labelSaturado.classList.toggle("clase-labels");
  labelNegativo.classList.toggle("clase-labels");
};

//Funcion boton modo claro-oscuro
const cambiarModo = () => {
  fondoBody.classList.toggle("clase-modo-claro");
  fondoHeader.classList.toggle("clase-modo-claro");
  tituloPrincipal.classList.toggle("clase-modo-claro");
  botonesNav.classList.toggle("nav");
  panelFondo.classList.toggle("panel-fondo-claro");
  panelTextoModoClaro.classList.toggle("panel-fondo-claro");
  botonCierraMenuTexto.classList.toggle("clase-modo-claro");
  btonCierraMenuImagen.classList.toggle("clase-modo-claro");
  fuentesModoClaro();
  cambiarClaseLabels();
};

botonModoOscuro.onclick = cambiarModo;
