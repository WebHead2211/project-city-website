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

  // useEffect(() => {}, []);

  return (
    <footer
      className=""
      style={{ display: "flex", alignItems: "center", position: "relative" }}
    >
      <h1>Made by Aayush Bakre</h1>
      <div
        className="temperature"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          right: "10px",
        }}
      >
        <i class="fa-solid fa-sun"></i>
        30 C
      </div>
    </footer>
  );
}
