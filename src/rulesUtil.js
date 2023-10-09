export const containsNumbers = (str) => {
  return /\d/.test(str);
};

export const containsSpecialCharacter = (inputString) => {
  // Define a regular expression pattern to match special characters
  const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // Use the test method to check if the inputString contains any special character
  return regex.test(inputString);
};

export function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

export function digitsAddTo25(password) {
  let sum = 0;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      sum += Number(password[i]);
    }
  }
  return sum === 25;
}

export const containsMonthOfYear = (inputString) => {
  // Define an array of full month names in lowercase
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  // Create a regular expression pattern to match any of the months
  const pattern = new RegExp(months.join("|"), "i"); // 'i' flag for case-insensitive matching

  // Test if the inputString contains any of the month names
  return pattern.test(inputString);
};

export const containsRomanNumeral = (inputString) => {
  // Define a regular expression to match Roman numerals
  const romanNumeralRegex =
    /M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;

  // Use the test method to check if the inputString contains a Roman numeral
  return romanNumeralRegex.test(inputString);
};

export const containsOneSponsor = (inputString) => {
  // Define a regular expression to match Roman numerals
  const pattern = /\b(pepsi|mcdonalds|starbucks)\b/i; // i flag for case-insensitivity

  // Use the test method to check if the inputString contains a Roman numeral
  return pattern.test(inputString.toLowerCase());
};

function romanToDecimal(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    if (
      i < roman.length - 1 &&
      romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]
    ) {
      total -= romanNumerals[roman[i]];
    } else {
      total += romanNumerals[roman[i]];
    }
  }

  return total;
}

export function checkRomanNumeralsMultiplyTo35(inputString) {
  const romanNumeralMatches = inputString.match(/[IVXLCDM]+/g);

  if (!romanNumeralMatches) {
    return false;
  }

  let product = 1;

  for (const romanNumeral of romanNumeralMatches) {
    const decimalValue = romanToDecimal(romanNumeral);
    product *= decimalValue;
  }

  return product === 35;
}

export function checkHasCaptcha(password, captcha) {
  return password.includes(captcha);
}
