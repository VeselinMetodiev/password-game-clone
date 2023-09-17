import RuleBox from './RuleBox.jsx'
import { useEffect, useState } from 'react'
import { containsNumbers, containsSpecialCharacter } from './rulesUtil'

const RuleBoxGrid = ({password}) => {
    const hasPassedRuleNumber = [
        password.length >= 5,
        containsNumbers(password),
        containsSpecialCharacter(password)
      ]

    const initialRules = [
        {
            isChecked: hasPassedRuleNumber[0],
            text: "Password should include at least 5 symbols.",
            number: 1
        },
        {
            isChecked: hasPassedRuleNumber[1],
            text: "Password should have a number.",
            number: 2
        },
        {
            isChecked: hasPassedRuleNumber[2],
            text: "Password should contain a special character",
            number: 3
        },
      ];

    const [rules, setRules] = useState(initialRules);

      useEffect(() => {
          const rulesCopy = [...initialRules];
          rulesCopy.sort(rulesSort);
          setRules(rulesCopy);
       }, [password]); 

// Custom sorting function
function rulesSort(a, b) {
    if (a.isChecked === false && b.isChecked === true) return -1;
    if (a.isChecked === true && b.isChecked === false) return 1;
    return 0; // Objects are equal or both have the same isChecked value
  }

    return (
       rules.map((rule) => {
        return (
            <RuleBox key={rule.number-1} text={rule.text} number={rule.number} isChecked={hasPassedRuleNumber[rule.number-1]}/>
        )
       })
    );
}
export default RuleBoxGrid;