// Online Payment System
abstract class Payment {
  public amount: number;
  public date: Date;
  constructor(amount: number, date: Date) {
    this.amount = amount;
    this.date = date;
  }
  public abstract processPayment(): void;
}

class CreditCardPayment extends Payment {
  private readonly cardNumber: string;
  constructor(amount: number, date: Date, cardNumber: string) {
    super(amount, date);
    this.cardNumber = cardNumber.toString();
  }

  processPayment(): void {
    console.log(`Rs ${this.amount} paid using card ${this.getCardNumber()}`);
  }

  getCardNumber(): string {
    return "*".repeat(this.cardNumber.length - 4) + this.cardNumber.slice(-4);
  }
}

class PaypalPayment extends Payment {
  private readonly email: string;
  constructor(amount: number, date: Date, email: string) {
    super(amount, date);
    this.email = email;
  }

  processPayment(): void {
    console.log(`Rs ${this.amount} paid from account ${this.email}`);
  }
}

class CryptoPayment extends Payment {
  private readonly walletAddress: string;
  constructor(amount: number, date: Date, walletAddress: string) {
    super(amount, date);
    this.walletAddress = walletAddress;
  }

  processPayment(): void {
    console.log(
      `Rs ${this.amount} paid from wallet ${
        this.walletAddress.slice(0, 6) + "*".repeat(10)
      }`
    );
  }
}

const payment1 = new CreditCardPayment(
  5000,
  new Date("2025-02-04"),
  "1234567812345678"
);
const payment2 = new PaypalPayment(
  3000,
  new Date("2025-02-04"),
  "test@example.com"
);
const payment3 = new CryptoPayment(
  10000,
  new Date("2025-02-04"),
  "3A1B2C3D4E5F6G7H8I"
);

payment1.processPayment();
payment2.processPayment();
payment3.processPayment();

// Output:
// Rs 5000 paid using card ************5678
// Rs 3000 paid from account test@example.com
// Rs 10000 paid from wallet 3A1B2C**********
