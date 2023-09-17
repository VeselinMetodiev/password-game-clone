import './RuleBox.css'
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from 'react'
const RuleBox = ({text, isChecked, number}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
       isChecked && setIsVisible(true);
    }, [isChecked]);

    const getColorClass = () => {
        if (isChecked) {
          return 'stunning-box blue';
        } else {
          return 'stunning-box red';
        }
      };

    return isVisible ? (
             <div className={getColorClass()}>
                <span className="top">
                    {isChecked ? <FaCheck className='icon' /> : <FaTimesCircle className='icon' />}Rule {number}</span>
              <p className="text">{text}</p>
            </div>
    ) : null;
  }

  export default RuleBox;