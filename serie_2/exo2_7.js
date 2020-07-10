const genre = "femme";
const age = 30;

//function impot(age, genre){

if (age > 20 && genre =="homme"){
    console.log("tu paye");
}else if (genre == "femme" && age > 18 && age < 35){
    console.log("tu paye");
}else{
    console.log("tu paye pas");
};