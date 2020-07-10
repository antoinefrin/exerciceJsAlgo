const tables1 = [1,4,5,23,7,6,9];

console.log(Math.max(...tables1));
console.log(tables1.indexOf(Math.max(...tables1)));



                    /** CORRECTION */

/*
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = tab[0];
let indexmax = 0;
*/

                    /** 1ère possibilité */

/*
 tab.map((element, index) => {
    if(element > max) {
        max = element;
        indexmax = index;
    }
});
*/

                    /** 2ème possibilité */

/* 
for (let i = 0; i < tab.length; i++) {
    if(tab[i] > max) {
        max = tab[i];
        indexmax = i;
    }
};
*/

                    /** 3ème possibilité */

/*
max = Math.max(...tab);
indexmax = tab.indexOf(max);
*/

/*
console.log(max);
console.log(indexmax);
*/