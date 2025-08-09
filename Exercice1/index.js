//votre code ici

export default pairNumbers
function pairNumbers(min, max) {
    let result = "";
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            if (result !== "") {
                result += ",";
            }
            result += i;
        }
    }
    return result;
}

// Exemple d'utilisation
console.log(pairNumbers(1, 10)); // Affiche : 2,4,6,8,10
