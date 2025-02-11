// Vehicle Rental System
class Vehicle {
    public brand: string;
    public model: string;
    private rentPricePerDay: number;
    constructor(brand:string, model:string, rentPricePerDay:number) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    calculateRentalCost(days:number):number {
        return this.rentPricePerDay * days;
    }
}
class Car extends Vehicle {
    constructor(brand, model, rentPricePerDay, seats) {
        super(brand, model, rentPricePerDay);
        this.seats = seats;
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days);
    }
}
class Bike extends Vehicle {
    constructor(brand, model, rentPricePerDay, engineCapacity) {
        super(brand, model, rentPricePerDay);
        this.engineCapacity = engineCapacity;
    }
    calculateRentalCost(days) {
        if (days >= 5) return super.calculateRentalCost(days) * 0.9;
        return super.calculateRentalCost(days);
    }
}
class Truck extends Vehicle {
    constructor(brand, model, rentPricePerDay, loadCapacity) {
        super(brand, model, rentPricePerDay);
        this.loadCapacity = loadCapacity;
    }
    calculateRentalCost(days) {
        if (days >= 3) return super.calculateRentalCost(days) * 0.85;
        return super.calculateRentalCost(days);
    }
}

const car = new Car("Toyota", "Corolla", 2000, 5);
const bike = new Bike("Royal Enfield", "Classic 350", 800, 350);
const truck = new Truck("Tata", "LPT 1613", 5000, 10);

console.log(
    `${car.brand + " " + car.model} (3 days): Rs. ${car.calculateRentalCost(3)}`
);
console.log(
    `${
    bike.brand + " " + bike.model
    } (7 days,discounted): Rs. ${bike.calculateRentalCost(7)}`
);
console.log(
    `${
    truck.brand + " " + truck.model
    } (4 days,discounted): Rs. ${truck.calculateRentalCost(4)}`
);