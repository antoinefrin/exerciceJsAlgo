const tab = [20, 15, 18, 33, 27];
console.log("le ciffre maximum est :" + Math.max(...tab));

/** Manque un truc pour que ca fonction lors de la correction "Boris" */

/*
const tabOne = [-3, -6, -9, 12];
function maxArray (array) {
    let [maximum, ...reste] = array;
    for (let i=0; i<reste.length; i++){
        if (reste[i] > maximum){
            maximum = reste[i]
        }
    }
    console.log("Le plus grand nombre de votre tableau est " + maximum + ".");
}
maxArray(tabOne)

/** ou */
/*
console.log(Math.max(...tab));
*/