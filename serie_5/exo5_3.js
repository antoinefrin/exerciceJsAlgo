/** Ecrire un algorithme qui permet de déterminer si une chaine de ccaractère donnée est un palindrome */

const str = "bob";
const isPalindrome = str => [...str].reverse().join("") === str;

//[...str] = ["b","o","b"] - on reserve - on join - true ou false
console.log(isPalindrome(str)) 