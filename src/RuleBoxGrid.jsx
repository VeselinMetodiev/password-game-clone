import RuleBox from "./RuleBox.jsx";
import { useEffect, useMemo, useState } from "react";
import {
  containsNumbers,
  containsSpecialCharacter,
  containsUppercase,
  digitsAddTo25,
} from "./rulesUtil";
import { rulesText } from "./rules.js";

const RuleBoxGrid = ({ password }) => {
  const ruleOne = password.length >= 5;
  const ruleTwo = containsNumbers(password) && ruleOne;
  const ruleThree = containsUppercase(password) && ruleTwo;
  const ruleFour = containsSpecialCharacter(password) && ruleThree;
  const ruleFive = digitsAddTo25(password) && ruleFour;
  const hasPassedRuleNumber = [ruleOne, ruleTwo, ruleThree, ruleFour, ruleFive];

  const initialRules = rulesText.map((rule, index) => {
    return {
      isChecked: hasPassedRuleNumber[index],
      text: rule,
      number: index + 1,
    };
  });

  const [rules, setRules] = useState(initialRules);

  useEffect(() => {
    const rulesCopy = [...initialRules];
    rulesCopy.sort(rulesSort);
    setRules(rulesCopy);
    console.log(initialRules);
  }, [password]);

  // Custom sorting function
  function rulesSort(a, b) {
    if (a.isChecked === false && b.isChecked === true) return -1;
    if (a.isChecked === true && b.isChecked === false) return 1;
    return 0; // Objects are equal or both have the same isChecked value
  }

  return rules.map((rule) => {
    return (
      <RuleBox
        key={rule.number - 1}
        text={rule.text}
        number={rule.number}
        isChecked={hasPassedRuleNumber[rule.number - 1]}
      />
    );
  });
};
export default RuleBoxGrid;
