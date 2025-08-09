// Fonction pour ajouter un chiffre ou un opérateur à l'affichage
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
    const display = document.getElementById('display');
    try {
        let result = ""; // use let so we can change the value

        // Vérifie si la division par zéro est présente
        if (/\/\s*0(?![\d.])/.test(display.value)) {
            result = 'Division by zero is not allowed';
        } else {
            // Évalue l'expression
            result = eval(display.value); // eval is fine for this simple exercise
        }

        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}
