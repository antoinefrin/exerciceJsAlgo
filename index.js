var a = "antoine";
var b = "Hello ";
console.log ( b + a );

function maFonction(id){

}

const name = "Antoine";
function sayHello(name){
    return "hello" + name; 
}
console.log(sayHello(name));


function sayHello(name) {
    return "Hello " + name;
  }
  const standard_input = process.stdin;
  console.log("Please enter you name");
  standard_input.on("data", function(name) {
      if(name == "exit\n") {
          process.exit();
      }
      console.log(sayHello(name));
  });

  let somme;
function Somme(somme) {
    return somme;
  }
  let standard_input = process.stdin;
  console.log("Entrer votre 1er nombre");
  standard_input.on('data', function Exit(exit){
      if (exit == '\n'){
          process.exit();
      }
    return standard_input;
  })