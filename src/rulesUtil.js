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
    /Ac|Ag|Al|Am|Ar|As|At|Au|Ba|Be|Bh|Bi|Bk|Br|Ca|Cd|Ce|Cf|Cl|Cm|Cn|Co|Cr|Cs|Cu|Db|Ds|Dy|Er|Es|Eu|Fe|Fl|Fm|Fr|Ga|Gd|Ge|He|Hf|Hg|Ho|Hs|In|Ir|Kr|La|Li|Lr|Lu|Lv|Mc|Md|Mg|Mn|Mo|Mt|Na|Nb|Nd|Ne|Nh|Ni|No|Np|Og|Os|Pa|Pb|Pd|Pm|Po|Pr|Pt|Pu|Ra|Rb|Re|Rf|Rg|Rh|Rn|Ru|Sb|Sc|Se|Sg|Si|Sm|Sn|Sr|Ta|Tb|Tc|Te|Th|Ti|Tl|Tm|Ts|Xe|Yb|Zn|Zr/;

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

export const containsLeapYear = (password) => {
  let currentNumber = "";
  let year = "";
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      currentNumber += password[i];
    } else {
      if (currentNumber) {
        year = parseInt(currentNumber);
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          console.log("Leap Year found: " + year);
          return true;
        }
        currentNumber = "";
      }
    }
    if (!isNaN(currentNumber)) {
      year = parseInt(currentNumber);
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year found: " + year);
        return true;
      }
    }
  }
  return false;
};

export const containsBestChessMove = (password, chessTactic) => {
  if (chessTactic && chessTactic.moves) {
    const move = chessTactic.moves.split(" ");
    console.log(move[1]);
    return password.includes(move[1]);
  }
  return false;
};

// Define atomic numbers of elements
const atomicNumbers = {
  H: 1,
  He: 2,
  Li: 3,
  Be: 4,
  B: 5,
  C: 6,
  N: 7,
  O: 8,
  F: 9,
  Ne: 10,
  Na: 11,
  Mg: 12,
  Al: 13,
  Si: 14,
  P: 15,
  S: 16,
  Cl: 17,
  Ar: 18,
  K: 19,
  Ca: 20,
  Sc: 21,
  Ti: 22,
  V: 23,
  Cr: 24,
  Mn: 25,
  Fe: 26,
  Co: 27,
  Ni: 28,
  Cu: 29,
  Zn: 30,
  Ga: 31,
  Ge: 32,
  As: 33,
  Se: 34,
  Br: 35,
  Kr: 36,
  Rb: 37,
  Sr: 38,
  Y: 39,
  Zr: 40,
  Nb: 41,
  Mo: 42,
  Tc: 43,
  Ru: 44,
  Rh: 45,
  Pd: 46,
  Ag: 47,
  Cd: 48,
  In: 49,
  Sn: 50,
  Sb: 51,
  Te: 52,
  I: 53,
  Xe: 54,
  Cs: 55,
  Ba: 56,
  La: 57,
  Ce: 58,
  Pr: 59,
  Nd: 60,
  Pm: 61,
  Sm: 62,
  Eu: 63,
  Gd: 64,
  Tb: 65,
  Dy: 66,
  Ho: 67,
  Er: 68,
  Tm: 69,
  Yb: 70,
  Lu: 71,
  Hf: 72,
  Ta: 73,
  W: 74,
  Re: 75,
  Os: 76,
  Ir: 77,
  Pt: 78,
  Au: 79,
  Hg: 80,
  Tl: 81,
  Pb: 82,
  Bi: 83,
  Po: 84,
  At: 85,
  Rn: 86,
  Fr: 87,
  Ra: 88,
  Ac: 89,
  Th: 90,
  Pa: 91,
  U: 92,
  Np: 93,
  Pu: 94,
  Am: 95,
  Cm: 96,
  Bk: 97,
  Cf: 98,
  Es: 99,
  Fm: 100,
  Md: 101,
  No: 102,
  Lr: 103,
  Rf: 104,
  Db: 105,
  Sg: 106,
  Bh: 107,
  Hs: 108,
  Mt: 109,
  Ds: 110,
  Rg: 111,
  Cn: 112,
  Nh: 113,
  Fl: 114,
  Mc: 115,
  Lv: 116,
  Ts: 117,
  Og: 118,
};

export // Function to check the sum of atomic numbers in the password
function checkAtomicSum(password) {
  let sum = 0;
  for (let i = 0; i < password.length; i++) {
    const elementA = password.slice(i, i + 1); // assuming all elements have a length of 1 or 2
    const elementB = password.slice(i, i + 2); // assuming all elements have a length of 1 or 2
    if (atomicNumbers[elementA]) {
      sum += atomicNumbers[elementA];
    }
    if (!atomicNumbers[elementA] && atomicNumbers[elementB]) {
      sum += atomicNumbers[elementB];
    }
  }
  console.log({ sum });
  return sum === 200;
}

export const checkHasPaulsEgg = (password) => {
  return password.includes("🥚");
};
