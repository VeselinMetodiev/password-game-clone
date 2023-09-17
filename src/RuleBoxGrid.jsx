import RuleBox from './RuleBox.jsx'

const RuleBoxGrid = ({password}) => {
    const containsNumbers = (str) => {
        return /\d/.test(str);
      }
  
      const containsSpecialCharacter = (inputString) => {
        // Define a regular expression pattern to match special characters
        const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
      
        // Use the test method to check if the inputString contains any special character
        return regex.test(inputString);
      }

      const hasPassedRuleNumber = [
        password.length >= 5,
        containsNumbers(password),
        containsSpecialCharacter(password)
      ]

      const rules = [
        {
            isChecked: false,
            text: "Password should include at least 5 symbols."
        },
        {
            isChecked: false,
            text: "Password should have a number."
        },
        {
            isChecked: false,
            text: "Password should contain a special character"
        },
      ];

    return (
       rules.map((rule, index) => {
        return (
            <RuleBox text={rule.text} number={index+1} isChecked={hasPassedRuleNumber[index]}/>
        )
       })
    );
}
export default RuleBoxGrid;