let a=-2, b=5;

console.log(a,b); 

function valeur(/*a=-2, b=5*/){
    if (a > 0) {
        //return "positif";
        console.log("positif");
    }else{
        //return "négatif";
        console.log("négatif");
    }
    if (b > 0) {
            //return "positif";
            console.log("positif");
        }else{
            //return "négatif";
            console.log("négatif");
        }
}
console.log(valeur(a,b));