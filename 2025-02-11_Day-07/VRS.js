var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Vehicle Rental System
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    Object.defineProperty(Vehicle.prototype, "RentPricePerDay", {
        get: function () {
            return this.rentPricePerDay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "GetVehicleDetails", {
        get: function () {
            return "".concat(this.brand, " ").concat(this.model);
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.calculateRentalCost = function (days) {
        return this.RentPricePerDay * days;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, rentPricePerDay, seats) {
        var _this = _super.call(this, brand, model, rentPricePerDay) || this;
        _this.seats = seats;
        return _this;
    }
    Car.prototype.calculateRentalCost = function (days) {
        return _super.prototype.calculateRentalCost.call(this, days);
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, rentPricePerDay, engineCapacity) {
        var _this = _super.call(this, brand, model, rentPricePerDay) || this;
        _this.engineCapacity = engineCapacity;
        return _this;
    }
    Bike.prototype.calculateRentalCost = function (days) {
        if (days >= 5)
            return _super.prototype.calculateRentalCost.call(this, days) * 0.9;
        return _super.prototype.calculateRentalCost.call(this, days);
    };
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, rentPricePerDay, loadCapacity) {
        var _this = _super.call(this, brand, model, rentPricePerDay) || this;
        _this.loadCapacity = loadCapacity;
        return _this;
    }
    Truck.prototype.calculateRentalCost = function (days) {
        if (days >= 3)
            return _super.prototype.calculateRentalCost.call(this, days) * 0.85;
        return _super.prototype.calculateRentalCost.call(this, days);
    };
    return Truck;
}(Vehicle));
var car = new Car("Toyota", "Corolla", 2000, 5);
var bike = new Bike("Royal Enfield", "Classic 350", 800, 350);
var truck = new Truck("Tata", "LPT 1613", 5000, 10);
console.log("".concat(car.GetVehicleDetails, " (3 days): Rs. ").concat(car.calculateRentalCost(3)));
console.log("".concat(bike.GetVehicleDetails, " (7 days,discounted): Rs. ").concat(bike.calculateRentalCost(7)));
console.log("".concat(truck.GetVehicleDetails, " (4 days,discounted): Rs. ").concat(truck.calculateRentalCost(4)));
