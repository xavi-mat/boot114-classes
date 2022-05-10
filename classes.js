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
        console.log("El resultado.");
    }
}

class Professor extends Person {
    constructor(name, age, gender, subject, level) {
        super(name, age, gender);
        this.subject = subject;
        this.level = level;
    }
    assign() {
        console.log("El resultado.");
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

const person1 = new Person("Euralio", 98, "sí");
person1.getDetails();

const student1 = new Student("Ambrosia", "22", "también", "Second", "Advanced");
student1.getDetails();
student1.register();

const prof1 = new Professor("Prof. Xavier", 77, "yes", "JavaScript", "Final Boss");
prof1.getDetails();
prof1.assign();