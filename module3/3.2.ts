{
    //
//Inheritance oop
//Parents
class Person{
    constructor(public name: string,public age: number,public country: string,public hasPartner: boolean) {  
    }
}


//Childs
class Student extends Person {
    constructor(name: string, age: number, country: string, hasPartner: boolean) {
        super(name, age, country, hasPartner);
    }
    
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}, Has Partner: ${this.hasPartner}`);
    }
}

//Childs
class Teacher extends Person {
    
    subject: string;
    designation: string;

    constructor(name: string, age: number, country: string, hasPartner: boolean, subject: string, designation: string) {
        super(name,age,country,hasPartner)
        this.subject = subject;
        this.designation = designation;
    }

    takeClass(numOfClass : number){
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}, Has Partner: ${this.hasPartner}, Subject: ${this.subject}, Designation: ${this.designation}, Taking Class: ${numOfClass}`);
    }
}


const student1 = new Student("John Doe", 20, "USA", false);
const teacher1 = new Teacher("muntasir", 46, "Bangladesh", "true", "economics ","professor", ) 

student1.displayInfo();

teacher1.takeClass(10);
    //
}