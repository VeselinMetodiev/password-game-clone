import "./App.css";
import PasswordInput from "./PasswordInput.jsx";
import RuleBoxGrid from "./RuleBoxGrid.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChessBoardComponent from "./components/ChessBoardComponent";
import { chessTactics } from "./chess/chessTactics";
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
      <ChessBoardComponent
        position={
          "1rq2rk1/1bp1npbp/p5p1/8/p2PPB2/2PB4/P2NQ1PP/1R3RK1 w - - 0 19"
        }
      />
      ;
    </>
  );
}

export default App;
