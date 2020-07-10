const HT = 20;
const NA = 15;
const TVA = 0.2;

function total(){
    return NA + HT *(1+TVA);
}
console.log("TTC=NA*HT*(1+TVA) = " + total());