import './App.css'
import PasswordInput from './PasswordInput.jsx'
import RuleBox from './RuleBox.jsx'
import { useEffect, useState } from 'react'

function App() {

  const [password, setPassword] = useState("")

  const handlePasswordChanged = (newPassword) => {
      setPassword(newPassword);
    };

    useEffect(() => {
      console.log(hasPassedRuleOne());
    }, [password]);

      const hasPassedRuleOne = () => {
        return password.length >= 5;
      };
  

  return (
    <> 
    <h2>* The Password Clone Game </h2>
    <div className="app">
      <PasswordInput passwordHasChanged={handlePasswordChanged}/>
      </div>
      <RuleBox number={1} isVisible isChecked={hasPassedRuleOne()} text="Password should include at least 5 symbols."/>
      <RuleBox isVisible isChecked={false} text="Password should have a number."/>
      <RuleBox isVisible isChecked={false} text="Password should contain a special character"/>
      <RuleBox isVisible isChecked={false} text="Password should contain a Roman numberal"/>
      <RuleBox isVisible isChecked={false} text="Password should have an element from the Periodic table"/>

    </>
  )
}

export default App
