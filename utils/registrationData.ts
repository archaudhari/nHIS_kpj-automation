// utils/registrationData.ts

export class RegistrationDataGenerator {

  static generateRandomNumber(length: number): string {
    let result = '';

    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }

    return result;
  }

  // Malaysia NRIC Format Example:
  // YYMMDD + PLACE + RANDOM
  // Example: 900101101234

  static generateNRIC(): string {

    const year = '90';
    const month = '01';
    const day = '01';

    const placeCode = this.generateRandomNumber(2);

    const randomDigits = this.generateRandomNumber(4);

    return `${year}${month}${day}${placeCode}${randomDigits}`;
  }

  static generatePassportNumber(): string {

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const firstLetter =
      letters[Math.floor(Math.random() * letters.length)];

    const numbers = this.generateRandomNumber(8);

    return `${firstLetter}${numbers}`;
  }

  static generateFirstName(): string {

    const names = [
      'AJAY',
      'RAHUL',
      'VIKRAM',
      'ARJUN',
      'KIRAN'
    ];

    return names[Math.floor(Math.random() * names.length)];
  }

  static generateLastName(): string {

    const lastNames = [
      'PATIL',
      'SHARMA',
      'SINGH',
      'JADHAV',
      'KUMAR'
    ];

    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }

  static generateFutureDate(): string {

    const futureDate = new Date();

    futureDate.setFullYear(futureDate.getFullYear() + 5);

    const day = String(futureDate.getDate()).padStart(2, '0');

    const month = String(
      futureDate.getMonth() + 1
    ).padStart(2, '0');

    const year = futureDate.getFullYear();

    return `${day}/${month}/${year}`;
  }
}