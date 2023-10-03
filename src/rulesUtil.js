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
