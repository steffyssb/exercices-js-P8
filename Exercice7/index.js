function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value.trim();
    const binaryResult = document.getElementById('binaryResult');

    // Vérifie que l'entrée est un nombre entier positif valide
    if (!/^\d+$/.test(decimalInput)) { // permet seulement les chiffres
        binaryResult.textContent = ''; // résultat vide pour invalide
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);

    // Conversion décimal → binaire
    let number = decimalNumber;
    let binary = '';

    if (number === 0) {
        binary = '0';
    } else {
        while (number > 0) {
            binary = (number % 2) + binary;
            number = Math.floor(number / 2);
        }
    }

    // Affichage du résultat (juste le binaire, pas de texte)
    binaryResult.textContent = binary;
}
