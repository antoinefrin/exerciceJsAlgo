function changeValeur(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a + " " + b);
}
changeValeur(5,8);

let e = 2;
let f = 3;
const g = e;
e = f;
e = g;

console.log('e = ' + e);
console.log('f = ' + f);