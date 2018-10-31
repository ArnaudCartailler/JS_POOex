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

// var king = {
//   name : "Naudje",
//   attack : 20,
//   health : 100,
//   method : ["magic", "bow"],
// };

// var queen = {
//   name : "Rosi",
//   attack : 25,
//   health : 90,
//   method : ["sword" , "fist"],
// };


// function kingattack(){
//   var tec = Math.round(Math.random());
//   if(tec === 0){
//     console.log("King is using " + king.method[0] + " and Queen has " + (queen.health - king.attack));
//   }else{
//     console.log("Queen is safe because King used" + king.method[1]);
//   }
// }

// function queenattack(){
//   var tec = Math.round(Math.random());
//   if (tec === 0) {
//     console.log("Queen is using " + queen.method[0] + " and King has " + (king.health - queen.attack));
//   } else {
//     console.log("King is safe because Queen used " + queen.method[1]);
//   }
// }


// document.getElementById("go").onclick = function () { turn() };

// function turn(){
// var x = Math.round(Math.random());

// if(x < 1){
//   kingattack();
//   document.getElementById("exo").innerHTML =
//     "King is using " + king.method[0] + " and Queen has " + (queen.health - king.attack) + ". <br />" + "King is safe because Queen used " + queen.method[1];

// }else{
//   queenattack();
//   document.getElementById("exo").innerHTML =
//     "Queen is using " + queen.method[0] + " and King has " + (king.health - queen.attack) + ". <br />" + "Queen is safe because King used " + king.method[1];
// }

// }

// TEST 2

function Person(first, health, attack, method) {
  this.name = first;
  this.health = health;
  this.attack = attack;
  this.method = method;
}

var king = new Person("Naudje", 100, 20,["sword", "fist"]);
var queen = new Person("Rosia", 90, 25, ["magic", "bow"]);

function Other(first, health, attack, mana, heal) {
  this.name = first;
  this.health = health;
  this.attack = attack;
  this.mana = mana;
  this.heal = heal;
}

var mage = new Other("Kiki", 80, 20, 50, 5);

function kingattack() {
  var tec = Math.random();
  if (tec < 0.33) {
    queen.health = queen.health - king.attack;
  } else if (tec < 0.66) {
    mage.health = mage.health - king.attack;
  } else {
    king.health = king.health;
  }
}

function queenattack() {
  var tec = Math.random();
  if (tec < 0.33) {
    king.health = king.health - queen.attack;
  } else if (tec < 0.66){
    mage.health = mage.health - queen.attack;
  } else{
    queen.health = queen.health;
  }
}

function mageattack() {
  var tec = Math.random();
  if (tec < 0.33) {
    mage.health = mage.health + mage.heal;
    mage.mana = mage.mana - mage.heal;
    if(mage.mana < 0){
      mage.health = mage.health
    }
  } else if(tec < 0.66){
    queen.health = queen.health - mage.attack;
  } else{
    king.health = king.health - mage.attack;
  }
}

document.getElementById("king").innerHTML = "king = " + king.health + "hp";
document.getElementById("queen").innerHTML = "queen = " + queen.health + "hp";
document.getElementById("mage").innerHTML = "mage = " + mage.health + "hp";
document.getElementById("magemana").innerHTML = "mage mana = " + mage.mana;

document.getElementById("go").onclick = function () { turn() };

function turn() {

  var x = Math.random();
  
  if (x < 0.33) {
    
    kingattack();
  console.log("queen have " + queen.health + " hp");
  console.log("king have " + king.health + " hp");
  console.log("mage have " + mage.health + " hp and " + mage.mana + " mana.");
  document.getElementById("king").innerHTML = "king = " + king.health + "hp";

    document.getElementById("exo").innerHTML =
      "King is using " + king.method[0] + " and Queen has " + queen.health + ". <br />" + "King is safe because Queen used " + queen.method[1];
    return;
  } else if(x < 0.66) {

    queenattack();
  console.log("queen have " + queen.health + " hp");
  console.log("king have " + king.health + " hp");
  console.log("mage have " + mage.health + " hp and " + mage.mana + " mana.");
    document.getElementById("queen").innerHTML = "queen = " + queen.health + "hp";

  document.getElementById("exo").innerHTML =
    "Queen is using " + queen.method[0] + " and King has " + king.health + ". <br />" + "Queen is safe because King used " + king.method[1];
return;
  }else{

      mageattack();
  console.log("queen have " + queen.health + " hp");
  console.log("king have " + king.health + " hp");
  console.log("mage have " + mage.health + " hp and " + mage.mana + " mana.");
    document.getElementById("mage").innerHTML = "mage = " + mage.health + "hp";
    document.getElementById("magemana").innerHTML = "mage mana = " + mage.mana;
  document.getElementById("exo").innerHTML = "Mage is using attacking";
  }
}
  
  if(queen.health < 0){
    console.log("Queen loose");
    document.getElementById("exo").innerHTML = "King has won !";
    document.getElementById("go").style.display = "none";

  }else if(king.health < 0){
    console.log("King loose");
    document.getElementById("exo").innerHTML = "Queen has won !";
    document.getElementById("go").style.display = "none";

  }else if(mage.health < 0){
    console.log("King loose");
    document.getElementById("exo").innerHTML = "Mage has won !";
    document.getElementById("go").style.display = "none";
}



