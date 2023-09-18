import useAutosizeTextArea from "./hooks/useAutosizeTextArea";
import { useRef } from "react";
const PasswordInput = ({ passwordHasChanged }) => {
  const value = useRef("");
  const textAreaRef = useRef(null);
  const handleChange = (e) => {
    passwordHasChanged(e.target.value);
    value.current = e.target.value;
  };

  useAutosizeTextArea(textAreaRef.current, value.current);

  return (
    <div className="centered-input-container">
      <textarea
        id="review-text"
        className="centered-input"
        onChange={handleChange}
        placeholder="Enter your password..."
        ref={textAreaRef}
        rows={1}
      />
    </div>
  );
};

export default PasswordInput;
