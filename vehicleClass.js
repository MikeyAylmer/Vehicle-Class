class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'Beep';
    };
    toString(){
        return `this vehicle is a ${this.make} ${this.model} from ${this.year}`
    }

};

class Car extends Vehicle{
    numWheels(){
        return 4;
    }
};

class Motorcycle extends Vehicle{
    numWheels(){
        return 2;
    };
    revEngine(){
        return "VROOOM!!";
    };
    
};

class Garage{
   constructor(compacity){
    this.vehicles = [];
    this.compacity = compacity;
   }
   add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
        return 'Only Vehicles allowed';
    }
    if(this.vehicles.length >= this.compacity){
        return "Sorry, we're full"
    };
    this.vehicles.push(newVehicle);
    return 'Vehicle added!';
    
   }
}