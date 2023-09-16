const PasswordInput = ({passwordHasChanged}) => {

    const handleInputChange = (e) => {
        passwordHasChanged(e.target.value);
      };

    return (
      <div className="centered-input-container">
        <input type="text" className="centered-input" placeholder="Enter your password..." 
        onChange={handleInputChange} />
      </div>
    );
  }

  export default PasswordInput;