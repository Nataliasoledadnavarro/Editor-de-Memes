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

const seleccionUsuario = (event)=>{
  if (event.target.value === "aclarar") {
    // debe de aplicar el filtro a la imagen con el color
  }
}

elementoSelector.addEventListener("change", seleccionUsuario); //escucho cuando se hace click en el sector



