{
    //
    // abstraction in OOP


    interface Vehicle {
        startEngine(): void;
        accelerate(): void;
        brake(): void;
    }
class Vehicle implements Vehicle{
    startEngine(): void {
        console.log('Engine started');
    }
    accelerate(): void {
        console.log('Vehicle is accelerating');
    }
    brake(): void {
        console.log('Vehicle is braking');
    }
}

const toyota = new Vehicle();

toyota.startEngine();

toyota.accelerate();

toyota.brake();

abstract class Vehicle1 {
    abstract startEngine(): void ;
    abstract accelerate(): void;
    brake(): void {
        console.log('Vehicle is braking');
    }
}

class Car extends Vehicle1 {
    startEngine(): void {
        console.log('Engine started');
    }
    accelerate(): void {
        console.log('Car is accelerating');
    }
}
const newCar = new Car()
newCar.startEngine();

    //
}