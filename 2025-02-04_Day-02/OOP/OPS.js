// Online Payment System
class Payment {
  constructor(amount, date) {
    if (new.target === Payment) {
      throw new Error("Can't instantiate payment directly");
    }
    this.amount = amount;
    this.date = date;
  }
  processPayment() {
    throw new Error("processPayment method not implemented");
  }
}

class CreditCardPayment extends Payment {
  #cardNumber;

  constructor(amount, date, cardNumber) {
    super(amount, date);
    this.#cardNumber = cardNumber.toString();
  }

  processPayment() {
    console.log(`Rs ${this.amount} paid using card ${this.getCardNumber()}`);
  }

  getCardNumber() {
    return "*".repeat(this.#cardNumber.length - 4) + this.#cardNumber.slice(-4);
  }
}

class PaypalPayment extends Payment {
  constructor(amount, date, email) {
    super(amount, date);
    this.email = email;
  }

  processPayment() {
    console.log(`Rs ${this.amount} paid from account ${this.email}`);
  }
}

class CryptoPayment extends Payment {
  constructor(amount, date, walletAddress) {
    super(amount, date);
    this.walletAddress = walletAddress;
  }

  processPayment() {
    console.log(
      `Rs ${this.amount} paid from wallet ${
        this.walletAddress.slice(0, 6) + "*".repeat(10)
      }`
    );
  }
}

const payment1 = new CreditCardPayment(5000, "2025-02-04", 1234567812345678);
const payment2 = new PaypalPayment(3000, "2025-02-04", "test@example.com");
const payment3 = new CryptoPayment(10000, "2025-02-04", "3A1B2C3D4E5F6G7H8I");

payment1.processPayment();
payment2.processPayment();
payment3.processPayment();
