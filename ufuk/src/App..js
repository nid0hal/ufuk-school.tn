import React, { useState, useEffect } from "react";
import "./App.css";
import kid from "./assets/kid.png";
import logo from "./assets/logo1.png";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="page">

      {/* Countdown */}
      <Countdown />

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Kid Image */}
      <img src={kid} alt="kid" className="kid" />

      {/* Center Content */}
      <div className="center">

        {/* Logo Circle */}
        <div className="logo-circle">
          <div className="logo-inner">
            <img src={logo} alt="UFUK logo" />
          </div>
        </div>

        <h1>UFUK SCHOOL</h1>

        {/* Animated Coming Soon */}
        <h2 className="coming-animated">
          {"COMING SOON".split("").map((letter, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>

        {/* Buttons */}
        <div className="btns">
          <button
            className="notify-btn"
            onClick={() => setShowEmail(!showEmail)}
          >
            GET NOTIFIED ✈
          </button>

          <button
            className="contact-btn"
            onClick={() => setShowContact(!showContact)}
          >
            CONTACT US ☎
          </button>
        </div>

        {/* Email Box */}
        <div className={`email-box ${showEmail ? "show" : ""}`}>
          <input type="email" placeholder="Enter your email address" />
          <button className="send-btn">Send</button>
        </div>

        {/* Contact Box */}
        <div className={`contact ${showContact ? "show" : ""}`}>
          <h3>Contact Us</h3>
          <p>Email: contact@ufukschool.com</p>
          <p>Phone: +216 00 000 000</p>
        </div>

        {/* Social Icons */}
        <div className="socials">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>

      </div>
    </div>
  );
}

/* ================= Countdown Components ================= */

function Countdown() {
  const targetDate = new Date("2026-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <TimeBox value={timeLeft.days} label="DAYS" />
      <TimeBox value={timeLeft.hours} label="HOURS" />
      <TimeBox value={timeLeft.minutes} label="MIN" />
      <TimeBox value={timeLeft.seconds} label="SEC" />
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <div className="time-value">
        {String(value).padStart(2, "0")}
      </div>
      <div className="time-label">{label}</div>
    </div>
  );
}

export default App;