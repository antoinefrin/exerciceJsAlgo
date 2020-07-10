const tables1 = [1,4,5,2,7,6,9];
const tables2 = [2,4,6,3,4,8,0];
const tables3 = [];

for (i=0; i<tables1.length; i++){
    let somme = 0;
    somme = tables1[i] + tables2[i];
    tables3.push(somme);

}
console.log(tables3);

                    /** CORRECTION */

                    /** 1ère possibilité */

/*
tables1.map((element, i) => {
    tables3[i] = element + tables2[i];
});
console.log(tables3);
*/

                    /** 2ème possibilité */

/*
for (let i = 0; i < tables1.length; i++) {
    tables3[i] = tables1[i] + tables2[i];
} 
console.log(tables3);
*/