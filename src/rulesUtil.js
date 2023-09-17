  export const containsNumbers = (str) => {
    return /\d/.test(str);
  }

  export const containsSpecialCharacter = (inputString) => {
    // Define a regular expression pattern to match special characters
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    // Use the test method to check if the inputString contains any special character
    return regex.test(inputString);
  }