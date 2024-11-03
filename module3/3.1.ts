{
    //
// OOP class
class Animal  {
//    public name: string;
//    public age: number;
//    public sound: string;

// public properties for clean code generation
    constructor(public name: string, public age: number,public sound: string) {
        // this.name = name;
        // this.age = age;
        // this.sound = sound;
    }

    makeSound(){
        console.log(`${this.name} says: ${this.sound}`);
    }
}

const dog = new Animal("german Shephard",  10, "Barking");
const cat = new Animal("Browmie",  10, "meao");

cat.makeSound();



    //
}