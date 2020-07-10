function changeValeur(a, b, c){
    d = c;
    c = b;
    b = a;
    a = d;
    console.log(a + " " + b + " " + c);
}
changeValeur(3, 6, 8);

// Ou bien faire comme suit plus simple

let a = 2;
let b = 3;
let c = 5;

[c,a,b] = [a,b,c];
console.log(a,b,c);