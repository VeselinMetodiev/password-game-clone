import "./App.css";
import PasswordInput from "./PasswordInput.jsx";
import RuleBoxGrid from "./RuleBoxGrid.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [password, setPassword] = useState("");

  const handlePasswordChanged = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <>
      <h2>* The Password Game Clone </h2>
      <div className="app">
        <PasswordInput passwordHasChanged={handlePasswordChanged} />
      </div>
      <RuleBoxGrid password={password} />
    </>
  );
}

export default App;
