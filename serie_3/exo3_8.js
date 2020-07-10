                    /** CORRECTION */

const tab = [10, 2, 13, 14, 15, 16, 7, 18, 19, 10];

let moyenne = tab.reduce((total, element) => total + element)/tab.length;

//const tabSupMoy = tab.filter(element => element > moyenne);

console.log('La moyenne de la classe est de: ' + moyenne);
//console.log('Les notes supérieure à la moyenne sont: ' + tabSupMoy.join('|'));