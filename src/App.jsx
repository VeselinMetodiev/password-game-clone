import "./App.css";
import PasswordInput from "./PasswordInput.jsx";
import RuleBoxGrid from "./RuleBoxGrid.jsx";
import { useEffect, useState } from "react";
import Map from "./maps/Map";

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
      {/* <Map /> */}
    </>
  );
}

export default App;
