/** Correction */
let firstVector = [2, 1, 4, 3];
let secondVector = [1, 3, 5, 10];
function vectorisation(firstVector, secondVector) {
    let vectorSum = 0;
    for (let i = 0; i < firstVector.length; i++) {
        vectorSum += firstVector[i] * secondVector[i];
    }
    console.log(vectorSum);
}
vectorisation(firstVector, secondVector);