import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header.css";
import revealAnimation from "../animation-effect/revealAnimation";

export default function Header() {
  let prevScrollpos = window.scrollY;
  window.addEventListener("scroll", () => {
    let scrollMax = document.body.scrollHeight - window.innerHeight;
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos 
      // || currentScrollPos >= scrollMax
    ) {
      document.querySelector("header").className = "active";
    } else {
      document.querySelector("header").className = "";
    }
    prevScrollpos = currentScrollPos;
  });

  const [active, setActive] = useState(undefined);

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <header id="nav" className="active">
      <div
        id="burger-menu"
        className={active}
        onClick={() => {
          // document.getElementById("burger-menu").classList.toggle("active");
          // document.getElementById("nav-list").classList.toggle("active");
          setActive((wasActive) => {
            if (!wasActive) {
              return "active";
            } else {
              return undefined;
            }
          });
        }}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <NavLink to="/">
        <div id="logo" className="hidden" style={{transition: "0.5s ease"}}>
          <div id="logo-filter"></div>
        </div>
      </NavLink>
      <ul id="nav-list" className={active}>
      <li className="hidden" style={{ transition: "0.5s ease" }}>
          <NavLink
            to="/"
            onClick={() => {
              setActive(undefined);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="hidden" style={{ transition: "0.5s ease" }}>
          <NavLink
            to="/smart"
            onClick={() => {
              setActive(undefined);
            }}
          >
            About
          </NavLink>
        </li>
        <li className="hidden" style={{ transition: "0.5s ease" }}>
          <NavLink
            to="/hotel"
            onClick={() => {
              setActive(undefined);
            }}
          >
            Stay
          </NavLink>
        </li>
        <li className="hidden" style={{ transition: "0.5s ease" }}>
          <NavLink
            to="/activity"
            onClick={() => {
              setActive(undefined);
            }}
          >
            Enjoy
          </NavLink>
        </li>
        <li className="hidden" style={{ transition: "0.5s ease" }}>
          <NavLink
            to="/restaurant"
            onClick={() => {
              setActive(undefined);
            }}
          >
            Eat
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
