// Premier cas possible

let tables = [];
tables.push(9, 12, 15, 11, 7, 12, 17, 10, 13);
console.log(tables);
console.log(tables.length);

// Deuxième cas possible

function tableNotes(...mesNotes){
    console.log(mesNotes)
}
tableNotes(9, 12, 15, 11, 7, 12, 17, 10, 13)

const tab1 = [1,2,3];
const tab2 = [4,5,6];
// [1,2,3,4,5,6]
console.log([...tab1, ...tab2]);