document.getElementById('encryptButton').addEventListener('click', function() {
        let inputText = document.getElementById('inputText').value;
        let encryptedText = encryptText(inputText);
        document.getElementById('outputText').value = encryptedText;
    });
    
    document.getElementById('decryptButton').addEventListener('click', function() {
        let inputText = document.getElementById('inputText').value;
        let decryptedText = decryptText(inputText);
        document.getElementById('outputText').value = decryptedText;
    });
    
    document.getElementById('copyButton').addEventListener('click', function() {
        let outputText = document.getElementById('outputText');
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
    
    function encryptText(text) {
        let encryptedText = text.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
        return encryptedText;
    }
    
    function decryptText(text) {
        let decryptedText = text.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
        return decryptedText;
    }
    