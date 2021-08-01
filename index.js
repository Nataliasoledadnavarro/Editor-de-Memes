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


// funcion picker de color

let inputColor = document.getElementById("color-fondo-img"); //selecciono el id de input
let textoColorFondo = document.querySelector(".texto-color-fondo-img"); //selecciono la clase del texto

const colorPicker= (event) => {
  textoColorFondo.textContent = event.target.value; //toma al valor del evento input y cambiale el contenido de texto a textoColorfondo (target: objetivo)
}

inputColor.addEventListener("input", colorPicker); 

//funcion selector

const elementoSelector = document.getElementById("opciones-fondo-img"); //seleciono el sector
const selectFondo = document.querySelector(".imagen-src");


const seleccionUsuario = (event)=>{
  if (event.target.value === "aclarar") {
    console.log("Entre en aclarar")
    selectFondo.style.mixBlendMode = "lighten"
  }
  else if (event.target.value === "oscurecer"){
    console.log("Entre en oscuro")
    selectFondo.style.mixBlendMode = "darken"
  }
  else if (event.target.value === "diferencia"){
    console.log("Entre en differencia")
    selectFondo.style.mixBlendMode = "difference"
  }
  else if (event.target.value === "luminosidad"){
    console.log("Entre en luminosidad")
    selectFondo.style.mixBlendMode =  "luminosity"
    
  } 
  else if (event.target.value === "multiplicar"){
    console.log("Entre en multiplicar")
    selectFondo.style.mixBlendMode = "multiply"
  }
  else{
    console.log("Entre en normal")
    selectFondo.style.mixBlendMode = "normal"
  }

}

elementoSelector.addEventListener("change", seleccionUsuario); //escucho cuando cambia el sector y se ejecuta la funcion seleccionUsuario
inputColor.addEventListener("change",seleccionUsuario)//se ejecute la funcion selecion usuario

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

const inputsRangeEnCero = () => {
  brilloInput.value = "1";
  opacidadInput.value = "1";
  contrasteInput.value = "0";
  desenfoqueInput.value = "0";
  escalaDeGrisesInput.value = "0";
  sepiaInput.value = "0";
  rangoHue.value = "0";
  saturadoInput.value = "0";
  negativoInput.value = "0";
};

inputsRangeEnCero();
