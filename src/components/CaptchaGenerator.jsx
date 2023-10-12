import React, { useEffect, useState } from "react";
import "./captcha.css";

const CaptchaGenerator = ({ captchaHasChanged }) => {
  const [captchaText, setCaptcha] = useState("");

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    setCaptcha(captcha.toLowerCase());
    captchaHasChanged(captcha.toLowerCase());
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div>
      <button className="captcha-button" onClick={generateCaptcha}>
        <span className="icon">&#x21BB;</span>
        New Captcha
      </button>
      <div className="captcha">{captchaText}</div>
    </div>
  );
};

export default CaptchaGenerator;
