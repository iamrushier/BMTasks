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
// Online Payment System
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, cardNumber) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber.toString();
        return _this;
    }
    CreditCardPayment.prototype.processPayment = function () {
        console.log("Rs ".concat(this.amount, " paid using card ").concat(this.getCardNumber()));
    };
    CreditCardPayment.prototype.getCardNumber = function () {
        return "*".repeat(this.cardNumber.length - 4) + this.cardNumber.slice(-4);
    };
    return CreditCardPayment;
}(Payment));
var PaypalPayment = /** @class */ (function (_super) {
    __extends(PaypalPayment, _super);
    function PaypalPayment(amount, date, email) {
        var _this = _super.call(this, amount, date) || this;
        _this.email = email;
        return _this;
    }
    PaypalPayment.prototype.processPayment = function () {
        console.log("Rs ".concat(this.amount, " paid from account ").concat(this.email));
    };
    return PaypalPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, walletAddress) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        return _this;
    }
    CryptoPayment.prototype.processPayment = function () {
        console.log("Rs ".concat(this.amount, " paid from wallet ").concat(this.walletAddress.slice(0, 6) + "*".repeat(10)));
    };
    return CryptoPayment;
}(Payment));
var payment1 = new CreditCardPayment(5000, new Date("2025-02-04"), "1234567812345678");
var payment2 = new PaypalPayment(3000, new Date("2025-02-04"), "test@example.com");
var payment3 = new CryptoPayment(10000, new Date("2025-02-04"), "3A1B2C3D4E5F6G7H8I");
payment1.processPayment();
payment2.processPayment();
payment3.processPayment();
