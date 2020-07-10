const tables1 = [1,4,5,2,7,6,9];
const tables2 = [];


for (i=0; i<tables1.length; i++){
    tables2[i] = tables1[i] + 1 ;
    //tables2.push();

}
console.log(tables2);
console.table(tables2);

                    /** CORRECTION */

                    /** 1ère possibilité */

/*
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tab1 = tab.map((element) => {
    return element + 1;
});
console.log(tab1);
*/

                    /** 2ème possibilité */

/*
for (let i = 0; i < tab.length; i++) {
    tab[i]++;
};

console.log(tab);
*/
