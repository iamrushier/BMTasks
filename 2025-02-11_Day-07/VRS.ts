// Vehicle Rental System
class Vehicle {
  public brand: string;
  public model: string;
  private rentPricePerDay: number;
  constructor(brand: string, model: string, rentPricePerDay: number) {
    this.brand = brand;
    this.model = model;
    this.rentPricePerDay = rentPricePerDay;
  }
  get RentPricePerDay(): number {
    return this.rentPricePerDay;
  }
  get GetVehicleDetails(): string {
    return `${this.brand} ${this.model}`;
  }
  public calculateRentalCost(days: number): number {
    return this.RentPricePerDay * days;
  }
}
class Car extends Vehicle {
  public seats: number;
  constructor(
    brand: string,
    model: string,
    rentPricePerDay: number,
    seats: number
  ) {
    super(brand, model, rentPricePerDay);
    this.seats = seats;
  }
  public calculateRentalCost(days: number) {
    return super.calculateRentalCost(days);
  }
}
class Bike extends Vehicle {
  public engineCapacity: number;
  constructor(
    brand: string,
    model: string,
    rentPricePerDay: number,
    engineCapacity: number
  ) {
    super(brand, model, rentPricePerDay);
    this.engineCapacity = engineCapacity;
  }
  public calculateRentalCost(days: number) {
    if (days >= 5) return super.calculateRentalCost(days) * 0.9;
    return super.calculateRentalCost(days);
  }
}
class Truck extends Vehicle {
  public loadCapacity: number;
  constructor(
    brand: string,
    model: string,
    rentPricePerDay: number,
    loadCapacity: number
  ) {
    super(brand, model, rentPricePerDay);
    this.loadCapacity = loadCapacity;
  }
  public calculateRentalCost(days: number) {
    if (days >= 3) return super.calculateRentalCost(days) * 0.85;
    return super.calculateRentalCost(days);
  }
}

const car = new Car("Toyota", "Corolla", 2000, 5);
const bike = new Bike("Royal Enfield", "Classic 350", 800, 350);
const truck = new Truck("Tata", "LPT 1613", 5000, 10);

console.log(
  `${car.GetVehicleDetails} (3 days): Rs. ${car.calculateRentalCost(3)}`
);
console.log(
  `${
    bike.GetVehicleDetails
  } (7 days,discounted): Rs. ${bike.calculateRentalCost(7)}`
);
console.log(
  `${
    truck.GetVehicleDetails
  } (4 days,discounted): Rs. ${truck.calculateRentalCost(4)}`
);

// Output:
// Toyota Corolla (3 days): Rs. 6000
// Royal Enfield Classic 350 (7 days,discounted): Rs. 5040
// Tata LPT 1613 (4 days,discounted): Rs. 17000
