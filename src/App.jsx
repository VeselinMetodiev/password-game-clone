import "./App.css";
import PasswordInput from "./PasswordInput.jsx";
import RuleBoxGrid from "./RuleBoxGrid.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChessBoardComponent from "./components/ChessBoardComponent";

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
      <ChessBoardComponent position="rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2" />
      ;
    </>
  );
}

export default App;
