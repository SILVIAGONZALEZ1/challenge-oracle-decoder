// Función para encriptar el texto
function encriptar(texto) {
  const encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
  const desencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return desencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
  const outputText = document.getElementById("output-text");
  outputText.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles!");
}

// Eventos de los botones
document.getElementById("encrypt-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-text").value;
  const outputText = encriptar(inputText.toLowerCase());
  document.getElementById("output-text").value = outputText;
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-text").value;
  const outputText = desencriptar(inputText.toLowerCase());
  document.getElementById("output-text").value = outputText;
});

/*document.getElementById("copy-btn").addEventListener("click", copiarTexto);*/

function copiarTexto() {
  let texto = document.getElementById("output-text").value;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
