//Exo 1 :

// function user(firstname, lastname, country, age, pay){
//   firstname = "Arnaud";
//   lastname = "Cartailler";
//   country = "France";
//   age = 25;
//   pay = ["mastercard", "visa"];

//   var x = 2018 - age;
//     person = function(){
//       alert(firstname +  " " + lastname + " " + x)
//     };

//     person();
// }
//     user();


// Aller plus loin :

// var x = prompt("Age ?");
// var y = prompt("Country ?");
// var z = prompt("Pay ?");

// function site(country, age, pay){
//   country = ["FRANCE", "ENGLAND", "GERMANY"] ;
//   age = 25;
//   pay = ["MASTERCARD", "VISA"];
  
// };

// var real = 2018-x;

// site();

// for(i = 0; i < country.length; i++){
//   if(y === country[i]){
//     break;
//   } else{
//     continue;
//   };
  
// }

// for (u = 0; u < pay.length; u++) {
//   if (z === country[u]) {
//     break;
//   } else {
//     continue;
//   };

// }


// alert("you live in " + y + "." + " You pay with a " + z + "." + " You was born in " + real); 

//EXO 2 :

var king = {
  name : "Naudje",
  attack : 20,
  health : 100,
  method : ["magic", "bow"],
  get heal(){
    return this.health;
  },
  get att(){
    return this.attack;
  }
};

var queen = {
  name : "Rosi",
  attack : 25,
  health : 90,
  method : ["sword" , "fist"],
  get heal(){
    return this.health;
  },
  get att() {
    return this.attack;
  }
};


function kingattack(){
  var tec = Math.round(Math.random());
  if(tec === 0){
    console.log("King is using " + king.method[0] + " and Queen has " + (queen.health - king.attack));
  }else{
    console.log("Queen is safe and King is using " + king.method[1]);
  }
}

function queenattack(){
  var tec = Math.round(Math.random());
  if (tec === 0) {
    console.log("Queen is using " + queen.method[0] + " and King has " + (king.health - queen.attack));
  } else {
    console.log("King is safe and Queen is using " + queen.method[1]);
  }
}
var x = Math.round(Math.random());

if(x < 1){
  kingattack();

}else{
  queenattack();
}