import RuleBox from "./RuleBox.jsx";
import { useEffect, useMemo, useState } from "react";
import {
  containsNumbers,
  containsSpecialCharacter,
  containsUppercase,
  digitsAddTo25,
  containsMonthOfYear,
  containsRomanNumeral,
  containsOneSponsor,
  checkRomanNumeralsMultiplyTo35,
  checkHasCaptcha,
  checkHasTodaysWordleAnswer,
  hasTodaysWordleAnswer,
} from "./rulesUtil";
import { rulesText } from "./rules.js";
import CaptchaGenerator from "./components/CaptchaGenerator";

const initialRules = rulesText.map((rule, index) => {
  return {
    isChecked: false,
    text: rule,
    number: index + 1,
    isVisible: index === 0 ? true : false,
  };
});

const RuleBoxGrid = ({ password }) => {
  const [captcha, setCaptcha] = useState("");
  const [rules, setRules] = useState(initialRules);

  const ruleOne = password.length >= 5;
  const ruleTwo = containsNumbers(password);
  const ruleThree = containsUppercase(password);
  const ruleFour = containsSpecialCharacter(password);
  const ruleFive = digitsAddTo25(password);
  const ruleSix = containsMonthOfYear(password);
  const ruleSeven = containsRomanNumeral(password);
  const ruleEight = containsOneSponsor(password);
  const ruleNine = checkRomanNumeralsMultiplyTo35(password);
  const ruleTen = checkHasCaptcha(password, captcha);
  const ruleEleven = checkRuleEleven(password);

  const hasPassedRuleNumber = [
    ruleOne,
    ruleTwo,
    ruleThree,
    ruleFour,
    ruleFive,
    ruleSix,
    ruleSeven,
    ruleEight,
    ruleNine,
    ruleTen,
    ruleEleven,
  ];

  function checkRuleEleven(password) {
    hasTodaysWordleAnswer(password);
    return checkHasTodaysWordleAnswer;
  }

  const captchaHasChanged = async (newCaptcha) => {
    setCaptcha(newCaptcha);
  };

  const assignExtraContent = (index) => {
    switch (index) {
      case 7:
        return (
          <>
            <div className="logo-container">
              <img src="src/img/pepsi-logo.png" alt="Pepsi Logo" />
              <img src="src/img/starbucks-logo.png" alt="Starbucks Logo" />
              <img src="src/img/mcdonalds-logo.png" alt="McDonald's Logo" />
            </div>
          </>
        );
      case 9:
        return (
          <>
            <CaptchaGenerator captchaHasChanged={captchaHasChanged} />
          </>
        );
      default:
        return null; // Return null or an empty React fragment for other cases
    }
  };

  useEffect(() => {
    console.log({ ruleEleven });
    const newRules = rules
      .sort((a, b) => a.number - b.number)
      .map((rule, index, array) => {
        return (array[index] = {
          ...rule,
          isChecked: hasPassedRuleNumber[index],
          isVisible: rule.isVisible
            ? true
            : index > 0 &&
              array[index - 1].isVisible &&
              hasPassedRuleNumber[index - 1],
          extraContent: assignExtraContent(index),
        });
      });
    setRules(newRules);
  }, [password]);

  // Custom sorting function
  function rulesSort(a, b) {
    if (a.isChecked === false && b.isChecked === true) return -1;
    if (a.isChecked === true && b.isChecked === false) return 1;
    return 0; // Objects are equal or both have the same isChecked value
  }

  return rules.sort(rulesSort).map((rule) => {
    return (
      <RuleBox
        key={rule.number - 1}
        text={rule.text}
        number={rule.number}
        isChecked={rule.isChecked}
        isVisible={rule.isVisible}
        extraContent={rule.extraContent}
      />
    );
  });
};
export default RuleBoxGrid;
