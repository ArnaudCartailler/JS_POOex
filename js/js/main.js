//Exo 1 :

// function user(firstname, lastname, country, age, pay){
//   this.firstname = "Arnaud";
//   this.lastname = "Cartailler";
//   this.country = "France";
//   this.age = 25;
//   this.pay = ["mastercard", "visa"];

//   var x = 2018 - this.age;
//     this.person = function(){
//       alert(this.firstname +  " " + this.lastname + " " + x)
//     };

//     person();
// }
//     user();


// Exo 2 :

// var x = prompt("Age ?");
var y = prompt("Country ?");
// var z = prompt("Pay ?");

function site(country, age, pay){
  this.country = ["FRANCE", "ENGLAND", "GERMANY"] ;
  this.age = 25;
  this.pay = ["MASTERCARD", "VISA"];
  
};

site();

for(i = 0; i < this.country.length; i++){
  if(y == country[i]){
    alert("good");
  } else{
    alert("wrong");
  };
  
}

