'use strict';
////////////////////////////////////////////////////////////////////////////////
// Classes - Exercise
// for The Bridge
// by  xavimat
// 2022-05-10
//
////////////////////////////////////////////////////////////////////////////////
// Constants


////////////////////////////////////////////////////////////////////////////////
// DOM


////////////////////////////////////////////////////////////////////////////////
// Globals


////////////////////////////////////////////////////////////////////////////////
// Classes

// Exercise 1
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getDetails() {
        console.log(`Person details:
            Name: ${this.name}.
            Age: ${this.age}.
            Gender: ${this.gender}.`);
    }
}

class Student extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender);
        this.course = course;
        this.group = group;
    }
    register() {
        console.log('"El resultado."');
    }
}

class Professor extends Person {
    constructor(name, age, gender, subject, level) {
        super(name, age, gender);
        this.subject = subject;
        this.level = level;
    }
    assign() {
        console.log('"El resultado."');
    }
}

// Extras
// Exercise 2
class Warrior {
    constructor(name, life, power) {
        this.name = name;
        this.life = life;
        this.power = power;
    }
    attack() {
        if (this.isDead) {
            console.log(`${this.name} is now a zombie!`);
        }
        console.log(`${this.name} attacks with: ${this.power}!`);
        return this.power;
    }
    defend(damage) {
        if (damage == 0) {
            console.log(`${this.name} dodges the attack.`);
        } else {
            this.life -= damage;
            this.life = Math.max(this.life, 0);
            console.log(`${this.name} receives ${damage} damage.`);
            console.log(`${this.name}'s life: ${this.life}.`);
            if (this.isDead) {
                console.log(`${this.name} is now dead...`);
            }
        }
    }
    get isDead() { return this.life <= 0; }
}

class Maya extends Warrior {
    constructor(name, life, power) {
        super(name, life, power);
    }
    drikColaCao() {
        console.log(`${this.name} drinks ColaCao. +10 power!`);
        this.power += 10;
    }
}

class Aztec extends Warrior {
    constructor(name, life, power) {
        super(name, life, power);
    }
    drinkNesquik() {
        console.log(`${this.name} drinks Nesquik. +10 life!`);
        this.life += 10;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Utils


////////////////////////////////////////////////////////////////////////////////
// Functions


////////////////////////////////////////////////////////////////////////////////
// Listeners


////////////////////////////////////////////////////////////////////////////////
// Init

console.log("////////////////////\n// Exercise 1");
const person1 = new Person("Euralio", 98, "sí");
person1.getDetails();

const student1 = new Student("Ambrosia", "22", "también", "Second", "Advanced");
student1.getDetails();
student1.register();

const prof1 = new Professor("Prof. Xavier", 77, "yes", "JavaScript", "Final Boss");
prof1.getDetails();
prof1.assign();


console.log("\n////////////////////\n// Extra Exercise 2");
const aztec = new Aztec("Aztec", 100, 100);
const maya = new Maya("Maya", 100, 100);

aztec.drinkNesquik();
maya.drikColaCao();
aztec.defend(maya.attack());
maya.defend(aztec.attack());


console.log("\n////////////////////\n// Extra Exercise 3");
