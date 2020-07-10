/*const tab = [65,89,101,46,97,42,220];

tab.sort();
console.log(tab);
*/

function tri(tab){
    let temp;
    for (let i=0; i<tab.length; i++){
        for(let j=i+1; j<tab.length; j++){
            if(tab[j]> tab[i]){
                temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
    }
}

function arrayDecroissant(array){
    //array.sort((a,b) => b - a);
    tri(array);
    console.log("Votre tableau a été trié: " +array);
    let max = array[1];
    let min = array[array.length - 2];

    console.log("Le second plus petit chiffre est: " + min);
    console.log("Le second plus grand chiffre est: " + max); 
}
arrayDecroissant([1,15,90,40,21]);