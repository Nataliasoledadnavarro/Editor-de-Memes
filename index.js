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
//Funcion Cambio de Fuentes
selectFuentes = document.getElementById("tipos-de-fuentes");
const cambiarFuentes = (event) => {
  if (event.target.value === 'Arial') {
    textoSuperior.style.fontFamily = 'Arial';
    textoInferior.style.fontFamily = 'Arial';
  } 
  else if (event.target.value === 'Permanent Marker') {
    textoSuperior.style.fontFamily = "'Permanent Marker', cursive";
    textoInferior.style.fontFamily = "'Permanent Marker', cursive";
  } 
  else if (event.target.value === 'Palette Mosaic') {
    textoSuperior.style.fontFamily = "'Palette Mosaic', cursive";
    textoInferior.style.fontFamily = "'Palette Mosaic', cursive";
  } 
  else if (event.target.value === 'WindSong') {
    textoSuperior.style.fontFamily = "'WindSong', cursive";
    textoInferior.style.fontFamily = "'WindSong', cursive";
  }
   else if (event.target.value === 'Courier New') {
    textoSuperior.style.fontFamily = "'Courier New', Courier, monospace";
    textoInferior.style.fontFamily = "'Courier New', Courier, monospace";
  } 
  else if (event.target.value === "Unset") {
    textoSuperior.style.fontFamily = "Unset";
    textoInferior.style.fontFamily = "Unset";
  }
   else if (event.target.value === 'Shadows Into Light' ) {
    textoSuperior.style.fontFamily = "'Shadows Into Light', cursive";
    textoInferior.style.fontFamily = "'Shadows Into Light', cursive";
  }
   else if (event.target.value === 'Style Script') {
    textoSuperior.style.fontFamily = "'Style Script', cursive";
    textoInferior.style.fontFamily = "'Style Script', cursive";
  }
   else if (event.target.value === 'Times New Roman') {
    textoSuperior.style.fontFamily = "'Times New Roman', Times, serif;";
    textoInferior.style.fontFamily = "'Times New Roman', Times, serif;";
  }
};
selectFuentes.addEventListener('change', cambiarFuentes);
 

/* Tamaño Letra Formulario Texto */
const tamanioLetra = document.getElementById('tamanio-letra');

tamanioLetra.oninput = () => {
  textoSuperior.style.fontSize = tamanioLetra.value + "px"
  textoInferior.style.fontSize = tamanioLetra.value + "px"
}

/*Alineacion Formulario Texto */

const alineacionIzquierda = document.getElementById('boton-izquierda');
const alineacionCentro = document.getElementById('boton-centrado');
const alineacionDerecha = document.getElementById('boton-derecha');


alineacionIzquierda.onclick = (event) => {
   event.preventDefault();
  textoSuperior.style.justifyContent = "flex-start"
  textoInferior.style.justifyContent = "flex-start"
};
alineacionCentro.onclick = (event) => {
  event.preventDefault();
  textoSuperior.style.justifyContent = 'center';
  textoInferior.style.justifyContent = 'center';
};
alineacionDerecha.onclick = (event) => {
  event.preventDefault();
  textoSuperior.style.justifyContent = 'flex-end';
  textoInferior.style.justifyContent = 'flex-end';
}
 //NUEVA RAMA FORMULARIO-TEXTO-MECHA 
 // FORMULARIO - TEXTO COLOR Y FONDO
// COLOR
 
let parrafoInferior= document.querySelector (".parrafo-inferior")// texto del input texto inferior
let parrafoSuperior= document.querySelector(".parrafo-superior") //Texto del input texto superior

let inputFondoTexto= document.getElementById("input-color-fondo") //picker de color de fondo
let inputColorTexto= document.getElementById ("input-color-texto") //picker de color del texto 

let spanColorTexto= document.querySelector(".span-color-texto") //el codigo del color que se elije 
let spanFondoTexto= document.querySelector(".span-fondo-texto") // el codigo del color del fondo

//FUNCION PARA CAMBIAR EL CODIGO DEL COLOR DEL INPUT COLOR PICKER 

const codigoDeColor= (event) => {
spanColorTexto.textContent= event.target.value;
    
}
inputColorTexto.addEventListener ("input", codigoDeColor)

const codigoColorFondo= (event)=>{
  spanFondoTexto.textContent= event.target.value;
  //console.log (colorFondoTexto)
}
inputFondoTexto.addEventListener ("input", codigoColorFondo)

// FUNCION PARA CAMBIAR EL COLOR DEL TEXTO 
const cambiarColorTexto= (event) =>{
  parrafoSuperior.style.color=inputColorTexto.value
  parrafoInferior.style.color=inputColorTexto.value
  
}

inputColorTexto.addEventListener ("input", cambiarColorTexto)

//FUNCION PARA APLICAR EL COLOR DE FONDO 
const cambiarColorFondoTexto= (event)=>{

  textoSuperior.style.backgroundColor= inputFondoTexto.value
  textoInferior.style.backgroundColor= inputFondoTexto.value

}

inputFondoTexto.addEventListener ("input", cambiarColorFondoTexto)

//FONDO TRANSPARENTE CHECKBOX

let checkboxTransparente=document.getElementById("fondo-transparente")
//llamar a la clase del p 
//poner el p en zindex cuando es fondo transparente
//sacar el div 

checkboxTransparente.oninput= ()=> {
  if (checkboxTransparente.checked){
    textoSuperior.style.display="none"
    textoInferior.style.display="none"
  }
  else{
    textoSuperior.style.backgroundColor="white"
    textoInferior.style.backgroundColor="white"
    textoSuperior.style.display="flex"
    textoInferior.style.display="flex"

  }
}




//Funcion modo oscuro-claro

const botonModoOscuro = document.getElementById("boton-modo-oscuro"); //boton 

//body 
const fondoBody = document.querySelector("body");
const fondoHeader = document.querySelector("header");
const tituloPrincipal = document.querySelector("h1");
const botonesNav = document.querySelector("nav");
const panelFondo = document.querySelector("#panel-img"); //aside con el id 
const panelTextoModoClaro = document.querySelector("#panel-texto");//aside

//fuentes modo claro
const tituloFormularioImg = document.querySelector("#titulo-formulario-imagen") //formulario imagen
const tituloFondoImagen = document.querySelector("#titulo-fondo-img")
const tituloFiltros = document.querySelector("#titulo-filtros")
 
const tituloFormularioTexto = document.querySelector("#titulo-formulario-texto") //formulario texto
const tituloTextoSuperior = document.querySelector("#titulo-texto-superior")
const tituloTextoInferior = document.querySelector("#titulo-texto-inferior")
const tituloFuente = document.querySelector("#titulo-fuente")
const tituloColor = document.querySelector("#titulo-color")
const tituloFondo = document.querySelector("#titulo-fondo")
const tituloContorno = document.querySelector("#titulo-contorno")
const tituloEspaciado = document.querySelector("#titulo-espaciado")
const tituloInterlineado = document.querySelector("#titulo-interlineado")

//labels
const labelUrl = document.querySelector("#label-url") //formulario imagen
const labelCheckboxSuperior = document.querySelector("#label-checkbox-superior")


const cambiarModo = () => {
  fondoBody.classList.toggle("clase-modo-claro") //ok
  fondoHeader.classList.toggle("clase-modo-claro") //ok
  tituloPrincipal.classList.toggle("clase-modo-claro") //ok
  botonesNav.classList.toggle("nav") //ok
  panelFondo.classList.toggle("panel-fondo-claro")
  panelTextoModoClaro.classList.toggle("panel-fondo-claro")

  fuentesModoClaro()
  cambiarClaseALabels()
}

botonModoOscuro.onclick = cambiarModo;

const fuentesModoClaro = () =>{
  tituloFormularioImg.classList.toggle("fuentes-modo-claro")
  tituloFondoImagen.classList.toggle("fuentes-modo-claro")
  tituloFiltros.classList.toggle("fuentes-modo-claro")

  tituloFormularioTexto.classList.toggle("fuentes-modo-claro")
  tituloTextoSuperior.classList.toggle("fuentes-modo-claro")
  tituloTextoInferior.classList.toggle("fuentes-modo-claro")
  tituloFuente.classList.toggle("fuentes-modo-claro")
  tituloColor.classList.toggle("fuentes-modo-claro")
  tituloFondo.classList.toggle("fuentes-modo-claro")
  tituloContorno.classList.toggle("fuentes-modo-claro")
  tituloEspaciado.classList.toggle("fuentes-modo-claro")
  tituloInterlineado.classList.toggle("fuentes-modo-claro")
 
}

const cambiarClaseALabels = () =>{
  labelUrl.classList.toggle("clase-labels") //form imagen
  labelCheckboxSuperior.classList.toggle("clase-labels")


}

