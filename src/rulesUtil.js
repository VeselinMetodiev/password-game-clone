export let checkHasTodaysWordleAnswer = false;

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
  return inputString.length > 0 && romanNumeralRegex.test(inputString);
};

export const containsOneSponsor = (inputString) => {
  // Define a regular expression to match Roman numerals
  const pattern = /(pepsi|mcdonalds|starbucks)/i; // i flag for case-insensitivity

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
  return captcha.length > 0 && password.includes(captcha);
}

export const hasTodaysWordleAnswer = (password, wordleAnswer) => {
  if (wordleAnswer.length > 0 && password.includes(wordleAnswer)) {
    return true;
  }
  return false;
};

export function containsTwoLetterElement(password) {
  const elementPattern =
    /Ac|Ag|Al|Am|Ar|As|At|Au|Ba|Be|Bh|Bi|Bk|Br|Ca|Cd|Ce|Cf|Cl|Cm|Cn|Co|Cr|Cs|Cu|Db|Ds|Dy|Er|Es|Eu|F|Fe|Fl|Fm|Fr|Ga|Gd|Ge|He|Hf|Hg|Ho|Hs|In|Ir|Kr|La|Li|Lr|Lu|Lv|Mc|Md|Mg|Mn|Mo|Mt|Na|Nb|Nd|Ne|Nh|Ni|No|Np|Og|Os|Pa|Pb|Pd|Pm|Po|Pr|Pt|Pu|Ra|Rb|Re|Rf|Rg|Rh|Rn|Ru|Sb|Sc|Se|Sg|Si|Sm|Sn|Sr|Ta|Tb|Tc|Te|Th|Ti|Tl|Tm|Ts|Xe|Yb|Zn|Zr/;

  return elementPattern.test(password);
}

export const containsMoonPhaseAsEmoji = (password, phase) => {
  let emoji = "";
  if (phase === "New") {
    emoji = "🌑";
  } else if (phase === "Waxing Crescent") {
    emoji = "🌒";
  } else if (phase === "First Quarter") {
    emoji = "🌓";
  } else if (phase === "Waxing Gibbous") {
    emoji = "🌔";
  } else if (phase === "Full") {
    emoji = "🌕";
  } else if (phase === "Waning Gibbous") {
    emoji = "🌖";
  } else if (phase === "Last Quarter") {
    emoji = "🌗";
  } else if (phase === "Waning Crescent") {
    emoji = "🌘";
  } else {
    console.log("No corresponding emoji found.");
  }
  return emoji.length > 0 && password.includes(emoji);
};

export const containsCountry = (password, country) => {
  return country.length > 0 && password.includes(country);
};
