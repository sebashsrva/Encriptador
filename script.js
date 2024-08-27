// 1. Selección de elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

// 2. Función de encriptado
function encryptText() {
    let text = inputText.value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    outputText.textContent = encryptedText;
}

// 3. Función de desencriptado
function decryptText() {
    let text = inputText.value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    outputText.textContent = decryptedText;
}

// 4. Función de copiar al portapapeles
function copyToClipboard() {
    const textToCopy = outputText.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

// 5. Añadir event listeners a los botones
encryptBtn.addEventListener('click', encryptText);
decryptBtn.addEventListener('click', decryptText);
copyBtn.addEventListener('click', copyToClipboard);
