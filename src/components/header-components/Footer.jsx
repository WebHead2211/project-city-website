import React, { useEffect, useState } from "react";
import "../../styles/Footer.css";

export default function Footer() {
  let prevScrollpos = window.scrollY;
  window.addEventListener("scroll", () => {
    let scrollMax = document.body.scrollHeight - window.innerHeight;
    let currentScrollPos = window.scrollY;
    if (
      (prevScrollpos > currentScrollPos || currentScrollPos >= scrollMax) &&
      currentScrollPos > 0
    ) {
      document.querySelector("footer").className = "active";
    } else {
      document.querySelector("footer").className = "";
    }
    prevScrollpos = currentScrollPos;
  });

  useEffect(() => {}, []);

  return (
    <footer className="" style={{ display: "flex", alignItems: "center" }}>
      <div className="footer-left">
        <div
          className="logo-container"
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "30px",
          }}
        >
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
      <div className="footer-right">
        <div className="name-container">
          <p>Aayush Bakre</p>
        </div>
        <div className="weather-container">
          <i class="fa-brands fa-instagram"></i>
          <p>30°C</p>
        </div>
      </div>
    </footer>
  );
}
