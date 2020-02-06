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

Person1.sayHello();
Person2.sayHello();
Person3.sayHello();
Person4.sayHello();
Person5.sayHello();


