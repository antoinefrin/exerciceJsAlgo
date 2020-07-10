let tables = [3,8,5,14,17];
let somme = 0;

    for(i=0; i<tables.length; i++){
        somme= somme + tables[i];
    }
console.log(somme);

                    /** CORRECTION */

/*const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somme = 0;

                    /** 1ère possibilité */

/*
tab.map(element => {
    somme += element;
});
console.log(somme);
*/

                    /** 2ème possibilité */

/*
for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
};
*/

                    /** 3ème possibilité */

/*
function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}
somme = tab.reduce(reducer);


console.log(somme);
*/