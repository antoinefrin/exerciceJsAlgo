function tabNegative(...myArray){
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < myArray.length; i++){
    if(myArray[i] >= 0){
        positif++
    } else {
        negatif++
    }
}
console.log("Vous avez entré " + negative + "chiffre négatif" + "Et chiffre" + positive + "positif.");

tabNegative(2, -4, -3, -1, 2, -2, 0);


 //Solution with map arrow function
myArray2.map(element) => {
    if (element >= 0){
        positif++
    } else {
        negatif++
    }
}
