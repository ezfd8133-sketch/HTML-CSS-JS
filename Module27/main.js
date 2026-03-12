// function displayAlert(){
//     alert("This text is inside the best thing ever created");
// }

// displayAlert();

// function mbledhja(numri1,numri2){
//     return numri1+numri2;
// }

// document.write(mbledhja(5,8));

// function toCelsius(f){
//     return 5/9*(f-32);
// }

// console.log("5 Fharonite to celsius is" +toCelsius(5)+ " celsius" );

// var arrayFunction = () => alert("Hellooo");

// arrayFunction();

// function dsFuction(){
//     var localVar = "DigitalSchool";
//     alert(localVar);
// }

// dsFuction();

// function toSekond(m){
//     return 60*(m);
// }

// console.log("5 Minutes to sekond is" +toSekond(5)+ " sekond" );

// function toPerimeter(a,b,c){
//     return a + b + c;
// }

// console.log(toPerimeter(30,40,50));

var Car = {type :"Audi", color :"Black", year : 2014, liscencePlate : "43-3213-KOS"}

alert(Car.liscencePlate);

alert(Car['color']);

function Computer(name,CPU,RAM,GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var c1 = new Computer("Gaming pc 1", "i9-core raizen", "32GB RAM", "4090 Nvidia Graphics card" );
var c2 = new Computer("Gaming pc 2", "i8-core raizen", "24GB RAM", "4060 Nvidia Graphics card" );
var c3 = new Computer("Gaming pc 3", "i7-core raizen", "16GB RAM", "3090 Nvidia Graphics card" );