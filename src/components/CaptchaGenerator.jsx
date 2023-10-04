import React, { useState } from "react";
import "./captcha.css";

const CaptchaGenerator = () => {
  const [captchaText, setCaptchaText] = useState("");

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    setCaptchaText(captcha);
  };

  return (
    <div>
      <h2>Custom CAPTCHA Generator</h2>
      <button onClick={generateCaptcha}>Generate CAPTCHA</button>
      <div className="captcha">{captchaText}</div>
    </div>
  );
};

export default CaptchaGenerator;
