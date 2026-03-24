import React, { useState, useEffect } from "react";
import "./App.css";
import kid from "./assets/kids.png";
import logo from "./assets/logo1.png";
import emailjs from "emailjs-com";
import AppRoutes from "./routes";



function App() {
  const [showContact, setShowContact] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  // 🔥 SEND EMAIL FUNCTION
  const sendEmail = () => {
    if (!form.nom || !form.prenom || !form.email) {
      alert("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "service_dk9nw3e",
        "template_cdy707s",
        {
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
        },
        "bO42a7OQ8VviEnk0_"
      )
      .then(() => {
        alert("✅ You will be notified!");
        setForm({ nom: "", prenom: "", email: "" });
      })
      .catch(() => {
        alert("❌ Error, try again");
      });
  };

  return (
    <div className="page">
      {/* Countdown */}
      <Countdown />

      {/* Background */}
      <div className="bg-decor">
        <div className="blue-circle"></div>

        {/* TOP CURVE */}
        <svg className="yellow-curve-top" viewBox="0 0 600 400">
          <path
            d="M0,250 A350,350 0 0,1 350,0"
            fill="none"
            stroke="#FFD54F"
            strokeWidth="16"
          />
        </svg>

        {/* BOTTOM CURVE */}
        <svg className="yellow-curve-bottom" viewBox="0 0 1400 400">
  <path
    d="M-100,320 
       C200,200 400,400 700,300 
       S1100,200 1500,300"
    fill="none"
    stroke="#FFD54F"
    strokeWidth="20"
  />
</svg>

        {/* Socials */}
        <div className="social-bubble">
          <div className="social-icons">
            <a href="https://www.instagram.com/ufuk.school" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/ufuk.connect" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://wa.me/21652056778" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>

            <a href="https://www.youtube.com/@ufukschool" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p>/Ufuk-School</p>
        </div>
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Kid */}
      <img src={kid} alt="kid" className="kid" />

      {/* Content */}
      <div className="center">
        <div className="logo-circle">
          <div className="logo-inner">
            <img src={logo} alt="UFUK logo" />
          </div>
        </div>

        <h1>UFUK SCHOOL</h1>

        <h2 className="coming-animated">
          {"COMING SOON".split("").map((letter, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>

        {/* Buttons */}
        <div className="btns">
          <button className="notify-btn" onClick={() => setShowEmail(!showEmail)}>
            GET NOTIFIED ✈
          </button>

          <button className="contact-btn" onClick={() => setShowContact(!showContact)}>
            CONTACT US ☎
          </button>
        </div>

        {/* FORM */}
        <div className={`email-box ${showEmail ? "show" : ""}`}>
          <input
            type="text"
            placeholder="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />

          <input
            type="text"
            placeholder="Prénom"
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button className="send-btn" onClick={sendEmail}>
            Send
          </button>
        </div>

        {/* Contact */}
        <div className={`contact ${showContact ? "show" : ""}`}>
          <h3>Contact Us</h3>
          <p>Email: contact@ufukschool.com</p>
          <p>Phone: +216 52 056 778</p>
        </div>
      </div>
    </div>
  );
}

/* ================= Countdown ================= */

function getTimeLeft(targetDate) {
  const now = new Date().getTime();
  const diff = targetDate - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Countdown() {
  const targetDate = new Date("2026-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

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