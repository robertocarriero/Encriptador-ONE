function asignarTextoElementos(elemento, texto) {
  let elementHtml = document.querySelector(elemento);
  if (elementHtml) {
    elementHtml.innerHTML = texto;
    console.log(`Texto asignado a ${elemento}: ${texto}`);
  } else {
    console.log(`No se encontró el elemento: ${elemento}`);
  }
}

function condicionInicial() {
  asignarTextoElementos('.titulo', 'Encriptador ONE');
  asignarTextoElementos('.parrafo p', '⚠ Solo letras minúsculas, sin acentos. Se permiten puntuación y guiones.');
  asignarTextoElementos('.subTitMun', 'Ningún mensaje ha sido encontrado');
  asignarTextoElementos('.parrMun', 'Ingresa el texto que desees encriptar <br> o desencriptar');
  const munecoElement = document.querySelector('.muñeco');
  const resultElement = document.querySelector('.result');
}
condicionInicial();

function validarTexto(texto) {
  const regex = /^[a-z\s.,-:;!?¿ñ]+$/;
  return regex.test(texto);
}

function mostrarModal(mensaje) {
  const modal = document.getElementById("errorModal");
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.innerText = mensaje;
  modal.style.display = "block";

  // Manejo del clic en el botón de cierre
  const closeButton = document.querySelector(".close");
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // Manejo del clic fuera del modal
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

function encriptar() {
  const texto = document.querySelector('.textarea').value;

  if (!validarTexto(texto)) {
    mostrarModal('El texto contiene caracteres no permitidos. El texo debe estar en minúsculas y sin acentos.');
    return;
  }

  const encriptado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
  const encriptadoElement = document.querySelector('.encriptado');
  if (encriptadoElement) {
    encriptadoElement.innerHTML = encriptado;
  }
  
  const munecoElement = document.querySelector('.muñeco');
  if (munecoElement) munecoElement.classList.add('hidden');
  const resultElement = document.querySelector('.subTitMun');
  if (resultElement) resultElement.classList.add('hidden');
  const resultElemento = document.querySelector('.parrMun');
  if (resultElemento) resultElemento.classList.add('hidden');
  console.log("Texto encriptado.");
}

function desencriptar() {
  const texto = document.querySelector('.textarea').value;

  if (!validarTexto(texto)) {
    mostrarModal('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas, puntuación y guiones.');
    return;
  }

  const desencriptado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  const encriptadoElement = document.querySelector('.encriptado');
  if (encriptadoElement) {
    encriptadoElement.innerHTML = desencriptado;
  }
  const munecoElement = document.querySelector('.muñeco');
  if (munecoElement) munecoElement.classList.add('hidden');
  const resultElement = document.querySelector('.result');
  if (resultElement) resultElement.classList.remove('hidden');
  console.log("Texto desencriptado.");
}

function copiarTexto() {
  const encriptadoElement = document.querySelector('.encriptado');
  const texto = encriptadoElement.innerHTML;
  navigator.clipboard.writeText(texto).then(function() {
      alert('Texto copiado al portapapeles');
  }).catch(function(err) {
      alert('Error al copiar el texto: ', err);
  });
}

function limpiarTextos() {
  document.querySelector('.textarea').value = '';
  
  const encriptadoElement = document.querySelector('.encriptado');
  if (encriptadoElement) {
    encriptadoElement.innerHTML = '';
  }
  const munecoElement = document.querySelector('.muñeco');
  if (munecoElement) munecoElement.classList.remove('hidden');
  const resultElement = document.querySelector('.subTitMun');
  if (resultElement) resultElement.classList.remove('hidden');
  const resultElemento = document.querySelector('.parrMun');
  if (resultElemento) resultElemento.classList.remove('hidden');
  console.log("Limpieza completada, figura visible.");
  condicionInicial();
}

// Agregamos eventos a los botones
document.querySelector('.button1').addEventListener('click', encriptar);
document.querySelector('.button2').addEventListener('click', desencriptar);
document.querySelector('.button3').addEventListener('click', copiarTexto);
document.querySelector('.button4').addEventListener('click', limpiarTextos);
document.querySelector('.close-button').addEventListener('click', closeButton);
