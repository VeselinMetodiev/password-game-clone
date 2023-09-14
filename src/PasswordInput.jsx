import { useEffect, useState } from 'react'
const PasswordInput = () => {

    const [password, setPassword] = useState("")

    useEffect(() => {
      console.log(hasPassedRuleOne());
    }, [password]);

    const handleInputChange = (e) => {
        setPassword(e.target.value);
      };

      const hasPassedRuleOne = () => {
        return password.length >= 5;
      };

    return (
      <div className="centered-input-container">
        <input type="text" value={password} className="centered-input" placeholder="Enter your password..." 
        onChange={handleInputChange} />
      </div>
    );
  }

  export default PasswordInput;