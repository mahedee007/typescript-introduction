{
    //
// Polymorfism

class Shape {
    getArea(){
        return 0;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }
    getArea(){
        return this.width * this.height;
    }
}

const getShape = (param: Shape) => {
    return param.getArea();
}

const shape = new Shape();
const circle = new Circle(12);
const rect = new Rectangle(12, 23)

console.log(getShape(shape)); // 0
console.log(getShape(circle)); 
console.log(getShape(rect)); 


class Sleep{
    sleep(){
        console.log(`I am sleeping for 8 hours `);
    }

}
class Student extends Sleep {
    sleep(){
        console.log(`I am sleeping for 7 hours `);
    }
}
class Developer extends Sleep {
    sleep(){
        console.log("I am sleeping for 6 hours" );
    }
}
const sleepingHours = (param: Sleep)=>{
    param.sleep();
}
const person1 = new Sleep();

const person2 = new Student();

const person3 = new Developer();


sleepingHours(person1); // I am sleeping for 8 hours

sleepingHours(person2); // I am sleeping for 7 hours

sleepingHours(person3); // I am sleeping for 6 hours
    //
}