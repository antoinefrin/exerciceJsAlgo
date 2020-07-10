
const tab = [10, -5, 15, 0, 20, -16, -53, 43, 0];

let pos = 0;
let sommePositif = 0;
let moyennePositif = 0;

let neg = 0;
let sommeNegatif = 0;
let moyenneNegatif = 0;

let nuls = 0;

for (let i=0; i<tab.length; i++){
        if(tab[i]>0){
            pos++;
            sommePositif  += tab[i];
            moyennePositif = sommePositif / pos;
        };
        if(tab[i]<0){
            neg++;
            sommeNegatif  += tab[i];
            moyenneNegatif = sommeNegatif / neg;
        };
        if (tab[i]===0) {
            nuls++;
        };
    }

    console.log('La valeur moyenne des éléments positif est de: ' + moyennePositif);
    console.log('La valeur moyenne des éléments négatif est de: ' + moyenneNegatif);
    console.log("Le nombre d'éléments est de: " + nuls);

                    /** Correction mais mon algo est la version plus optimisser */
/*
const tab = [10, -5, 15, 0, 20, -16, -53, 43, 0];

const pasTab = tab.filter(i=>i>0);
const negTab = tab.filter(i=>i<0);
const VMEP = posTab.reduce((total.element) => total + element)/posTab.length;
const VMEN = negTab.reduce((total.element) => total + element)/negTab.length;
const NEM = tab.length - posTab.length - negTab.length;

console.log("La moyenne des valeur > 0 est de : " + VMEP);
console.log("La moyenne des valeur < 0 est de : " + VMEN);
console.log("Le nombre des valeurs null est de : " + NEM);
*/