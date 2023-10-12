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
    <div className={getColorClass()}>
      <span className="top">
        {isChecked ? (
          <FaCheck className="icon" />
        ) : (
          <FaTimesCircle className="icon" />
        )}
        Rule {number}
      </span>
      <p className="text">{text}</p>
      {extraContent && <div className="extra-content">{extraContent}</div>}
    </div>
  ) : null;
};

export default RuleBox;
