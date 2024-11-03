{
    //
    // instanceof guard


    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`${this.name} makes a sound`);
        }
    }


class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    meow() {
        console.log(`${this.name} meows`);
    }
}

const isDog = (animal : Animal) : animal is Dog =>{
    return animal instanceof Dog;
}
const isCat = (animal : Animal) : animal is Cat =>{
    return animal instanceof Cat;
}


const getAnimal= (animal :Animal) => {
    if (isDog(animal)){
        animal.bark();
    }else if (isCat(animal)){
        animal.meow();
    }else{
        animal.makeSound();
    }
}


const dog = new Dog("flora", "shepard");
const cat = new Cat("Bronie", "persian");

getAnimal(dog)
getAnimal(cat)


    //
}