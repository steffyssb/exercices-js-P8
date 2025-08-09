// Sélection du bouton
const button = document.getElementById('myButton');

// Ajout d'un observateur d'événement sur le bouton
button.addEventListener('click', function() {
    // Vérifie si le paragraphe existe déjà
    let messageParagraph = document.getElementById('message');
    if (!messageParagraph) {
        // Crée le paragraphe
        messageParagraph = document.createElement('p');
        messageParagraph.id = 'message';
        messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
        // Ajoute le paragraphe après le bouton
        button.insertAdjacentElement('afterend', messageParagraph);
    }
});
