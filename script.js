function encriptar() {
    const input = document.getElementById("inputText").value;
    let resultado = input.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    const output = document.getElementById("outputText");
    output.value = resultado;
    output.style.backgroundImage = "none"; // Quitar imagen cuando se muestra el resultado
}

function desencriptar() {
    const input = document.getElementById("inputText").value;
    let resultado = input.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    const output = document.getElementById("outputText");
    output.value = resultado;
    output.style.backgroundImage = "none"; // Quitar imagen cuando se muestra el resultado
}

function copiarTexto() {
    const texto = document.getElementById("outputText");
    texto.select();
    document.execCommand("copy");
}