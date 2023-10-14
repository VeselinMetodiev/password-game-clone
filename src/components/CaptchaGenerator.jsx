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
    <div className="captcha">
      <div className="preview">{captchaText}</div>
      <button className="captcha-refresh" onClick={generateCaptcha}>
        <span className="icon">&#x21BB;</span>
      </button>
    </div>
  );
};

export default CaptchaGenerator;
