/*const tab = [
    [65,89,101],
    [46,97,42],
];
let max = 0;

function lire1(tab)
{
        let chaine = "Le tableau contient :"
        for(let i in tab){
            for(let j in tab[0]){
                if(tab[i][j] > max)
                max = tab[i][j];
            }
        }        
}
lire1(tab);
console.log(max);
*/

            /** Correction */

function fibonacci(iterationNumber) {
    let fiboArray = [0, 1];
    for (let i = 0; i < iterationNumber - 1; i++) {
       fiboArray.push(fiboArray[i + 1] + fiboArray[i]);
   }
    return fiboArray;
   }
console.log(fibonacci(10));