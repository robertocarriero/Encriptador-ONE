# Encriptador de Texto
>>## Descripción
>>>**Este proyecto es una aplicación web para encriptar y desencriptar texto utilizando reglas específicas de reemplazo de caracteres. Está diseñada para manejar texto en minúsculas, incluyendo puntuación y guiones, pero sin acentos.**

>>## Funcionalidades
>>>Encriptar Texto: Convierte texto ingresado en una versión encriptada mediante el reemplazo de ciertas letras por cadenas específicas.
>>>Desencriptar Texto: Restaura el texto encriptado a su versión original.
>>>Copiar Texto: Permite copiar el texto encriptado o desencriptado al portapapeles.
>>>Limpiar Textos: Limpia el área de texto y restablece la interfaz a su estado inicial.
>>>Validación de Texto: Asegura que el texto ingresado cumple con las restricciones especificadas (solo letras minúsculas, puntuación y guiones).
>>## Uso
>>>**Encriptar un Texto:**

>>>>Ingresar el texto en la caja de texto.
>>>>Presionar el botón "Encriptar".
>>>>El texto encriptado se mostrará en el área de resultado.
>>>>Desencriptar un Texto:
>>>>Ingresar el texto encriptado en la caja de texto.
>>>>Presionar el botón "Desencriptar".
>>>>El texto desencriptado se mostrará en el área de resultado.
>>>>Copiar Texto:
>>>>Presionar el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.
>>>>Limpiar Textos:
>>>>Presionar el botón "Limpiar" para borrar el texto ingresado y restaurar la interfaz a su estado inicial.
>>## Instalación
>>>>**Clonar el repositorio:**
>>>>>
>>>>>Copiar código
>>>>>### git clone https://github.com/robertocarriero/Encriptador
>>>>>Abrir el archivo index.html en tu navegador web para utilizar la aplicación.

>>## Tecnólogias utilizadas
>>>>***JavaScript - HTML - CSS***

>>## Código
>>>**El siguiente es un resumen de las funciones lógicas principales para el funcionamiento, esto es el arhivo app.js:**

>>>>***asignarTextoElementos(elemento, texto): Asigna texto a elementos HTML específicos.***
>>>>***condicionInicial(): Inicializa la interfaz de la aplicación.***
>>>>***validarTexto(texto): Valida el texto ingresado usando una expresión regular.***
>>>>***mostrarModal(mensaje): Muestra un modal de error con un mensaje específico.***
>>>>***encriptar(): Encripta el texto ingresado y actualiza la interfaz.***
>>>>***desencriptar(): Desencripta el texto ingresado y actualiza la interfaz.***
>>>>***copiarTexto(): Copia el texto encriptado o desencriptado al portapapeles.***
>>>>***limpiarTextos(): Limpia el área de texto y restaura la interfaz a su estado inicial.***
>>## Estructura del proyecto
```plaintext
C:.
│   app.js
│   index.html
│   
├───assets
│   └───img
│           logos5.png
│           Muñeco.png
│
