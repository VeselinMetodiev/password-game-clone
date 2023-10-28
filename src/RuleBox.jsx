import { useEffect, useState } from "react";
import "./RuleBox.css";
import { FaCheck, FaTimesCircle } from "react-icons/fa";
const RuleBox = ({ text, isChecked, number, isVisible, extraContent }) => {
  const [visible, setVisible] = useState(isVisible);

  const getColorClass = () => {
    if (isChecked) {
      return "stunning-box blue";
    } else {
      return "stunning-box red";
    }
  };

  // If once revealed, the rule must stay visible till the end
  useEffect(() => {
    if (isVisible && !visible) {
      setVisible(true);
    }
  }, [isVisible]);

  return visible ? (
    <div className={`rulebox ${isChecked ? "rule-correct" : "rule-err"}`}>
      <div className={`rulebox-top ${isChecked ? "rule-correct" : "rule-err"}`}>
        {isChecked ? "\u{2705}" : "\u{274C}"} Rule {number}
      </div>
      <div className="rulebox-desc">
        {text}
        {/* {renderItem===undefined? null: renderItem(propsToChild)} */}
        {extraContent && <div className="extra-content">{extraContent}</div>}
      </div>
    </div>
  ) : null;
};

export default RuleBox;
