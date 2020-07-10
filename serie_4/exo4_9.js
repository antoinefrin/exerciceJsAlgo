const tab = [];
let n1 = 0;
let n2 = 1;
let somme = 0;

function fibonacci(nombre){
    for (let i=1; i<nombre; i++) {
        
        somme = n1 + n2;
        n1 = n2;
        n2 = somme;
        tab.push(somme);
    }
}
fibonacci(100);
console.log(tab);


                /** Correction */
/*
function multiDimentionFinder() {
    let multiArray = [
      [2, 4, 1, 10, 16],
      [6, 8],
      [10, 12],
      [9, 7],
      [5, 3],
      [5, 123]
    ];
    let result = -Infinity;
    for (let i = 0; i < multiArray.length; i++) {
      for (let j = 0; j < multiArray[i].length; j++) {
        if (result < multiArray[i][j]) {
          result = multiArray[i][j];
        }
      }
    }
    console.log(result);
  }
  multiDimentionFinder();*/