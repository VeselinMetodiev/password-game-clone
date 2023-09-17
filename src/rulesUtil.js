  export const containsNumbers = (str) => {
    return /\d/.test(str);
  }

  export const containsSpecialCharacter = (inputString) => {
    // Define a regular expression pattern to match special characters
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    // Use the test method to check if the inputString contains any special character
    return regex.test(inputString);
  }

  export function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  export function digitsAddTo25(password){
    let sum = 0;
    for(let i = 0; i < password.length; i++){
        if(!isNaN(password[i])){
            sum += Number(password[i])
        }
    }
    console.log({sum});
    return sum === 25;
  }