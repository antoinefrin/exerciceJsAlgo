/** comprend la récusivité */

// la récursivité
// n! = n*n-1*n-2* ... * 1 * 0!
// 0! = 1
// 3! = 3*2*1*1

/*
function factoriel(n) {
    if(n === 0){
        return 1;
    }
    return n*factoriel(n-1);
}

const fact3 = factoriel(4);
console.log(fact3);
*/

            /** Correction */

// Ecrire un algorithme qui permet de calculer me produit scalaire de deuc vecteurs en utilisant la récursivité.

const vect1 = [2,4];
const vect2 = [4,2];

/** Avec récursivité */
function scalaire(vect1, vect2){
    /*
    if (vect1.length !== vect2.length){
        return null;
    }
    */

    if(vect1.length === 1 && vect2.length === 1){
        return vect1[0] * vect2[0];
    }
    return vect1.pop()*vect2.pop() + scalaire(vect1, vect2);
} 
console.log(scalaire(vect1, vect2));
