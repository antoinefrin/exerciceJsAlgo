/*const tab = [-20, 5, 28, 13, 47];
console.log("le ciffre maximum est :" + Math.max(...tab));
console.log("Le chiffre minimum est :" + Math.min(...tab));
*/

/** Exo fait par Boris */

const tab = [-33, 6, 9, -12];
function maxArray(array) {
    let [maximum, ...reste] = array;
    let minimum = maximum;
    for (i = 0; i < reste.length; i++) {
        if (reste[i] > maximum) {
            maximum = reste[i];
        }
        if (reste[i] < minimum) {
            minimum = reste[i];
        }
    }
    console.log("Le plus petit nombre dans votre tableau est " + minimum);
    console.log("Le plus grand nombre dans votre tableau est " + maximum);
}
maxArray(tab);
/** Ou */
//console.log(Math.min(...tab));

/* Math.max et Math.min pour une version plus courte, -Infinty pour entier Negatif*/