//object literals
let Person1 = {
    name: 'Leo',
    sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`)
    }   
}

let Person2 = {
    name: 'Mikey',
    sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`)
    }  
}

let Person3 = {
    name: 'Donnie',
    sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`)
    }  
}

let Person4 = {
    name: 'Raph',
    sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`)
    }  
}

let Person5 = {
    name: 'Splinter',
    sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`)
    }   
}
//call object literals
Person1.sayHello();
Person2.sayHello();
Person3.sayHello();
Person4.sayHello();
Person5.sayHello();


//constructor function
function Ninja(name,city,age) {
    this.name = `${name}`;
    this.city = `${city}`;
    this.age = `${age}`;   
}
//write method with prototype to print string
Ninja.prototype.hello = function() {
    console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`)
}
//create 5 instances and log
let Leo = new Ninja('Leo','Bham',35);
let Mikey = new Ninja('Mikey','Bham',21);
let Donnie = new Ninja('Donnie', 'Bham', 42);
let Raph = new Ninja('Raph', 'Bham', 28);
let Splinter = new Ninja('Splinter','Bham',100);
Leo.hello();
Mikey.hello();
Donnie.hello();
Raph.hello();
Splinter.hello();

//make it with classes
class Karen {
    constructor(name,city,age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    rbf() {
        console.log(`Yeah, my name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`)
    }
}
let Linda = new Karen('Linda','Bham',30);
let Susan = new Karen('Susan','Bham',28);
let Amy = new Karen('Amy','Bham',33);
let Debbie = new Karen('Debbie','Bham',36);
let Lisa = new Karen('Lisa','Bham', 40);
Linda.rbf();
Susan.rbf();
Amy.rbf();
Debbie.rbf();
Lisa.rbf();


class Vehicle {
    constructor(type,manufacturer,wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`This is a ${this.type} vehicle, made by ${this.manufacturer}, with ${this.wheels} wheels.`)
    }
}

class Sedan extends Vehicle {
    constructor(type,manufacturer,wheels,size,mpg) {
        super(type,manufacturer,wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutSedan() {
        //super.aboutVehicle();
        console.log(`This is a ${this.type} vehicle, made by ${this.manufacturer}, with ${this.wheels} wheels, is ${this.size} size, and gets ${this.mpg} mpg.`)
        //console.log(super(type,manufacturer,wheels) `, is ${this.size} size, and gets ${this.mpg} mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(type,manufacturer,wheels,handlebars,doors) {
        super(type,manufacturer,wheels);
        this.handlebars = handlebars;
        this.doors = doors;
    }
    aboutMotorcycle = function() {
        console.log(`This is a ${this.type} vehicle, made by ${this.manufacturer}, with ${this.wheels} wheels, with ${this.handlebars}, and with ${this.doors} doors.`)
    }
}

let v1 = new Vehicle('SUV','Toyota',4);
v1.aboutVehicle();
let s1 = new Sedan('Sedan','Honda',4,'medium',30);
s1.aboutSedan();
let m1 = new Motorcycle('Motorcycle','Harley',2,'handlebars','no');
m1.aboutMotorcycle();