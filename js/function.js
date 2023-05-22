// Création de la fonction qui récupère tous les index
const catchIndexes = function(array, value) {
    let indexes = [];
    for (i=0; i <= array.length-1; i++) {
        if (array[i] === value) {
            indexes.push(i)
        }
    }
    return indexes;
}

// Fonction qui voit si une valeur est dans un tableau
const inArray = function(array, value) {
    if (array.indexOf(value) === -1) {
        return false;
    }
    else {
        return true;
    }
}