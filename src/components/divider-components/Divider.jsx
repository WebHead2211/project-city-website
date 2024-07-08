import { useEffect, useState } from "react";
import "../../styles/Divider.css";
import DividerDiv from "./DividerDiv";
import revealAnimation from "../animation-effect/revealAnimation";

let prevMouseX = 0,
  prevMouseY = 0;

let ogBgX = 50,
  ogBgY = 50;

export default function Divider({ title, children }) {
  const [moveFactor, setMoveFactor] = useState([1, 1]);
  let divTitle;
  window.addEventListener("scroll", () => {
    if (divTitle && document.querySelector(".page-divider")) {
      let windowHeight = window.innerHeight;
      let elementTop = divTitle.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100 && elementTop > -400) {
        document.querySelector(".page-divider").classList.add("active");
      } else {
        document.querySelector(".page-divider").classList.remove("active");
      }
    }
  });

  if (document.querySelector(".page-divider")) {
    document.querySelector(
      ".page-divider"
    ).style.backgroundPosition = `${ogBgX}% ${ogBgY}`;
  }

  const moveBackground = (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    if (prevMouseX === 0 || prevMouseY === 0) {
      prevMouseX = mouseX;
      prevMouseY = mouseY;
    }
    let mouseChangeX = mouseX - prevMouseX,
      mouseChangeY = mouseY - prevMouseY;
    setMoveFactor([-mouseChangeX / 100, -mouseChangeY / 10]);
    setBg(moveFactor[0], moveFactor[1]);
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  };

  const resetBackground = () => {
    if (document.querySelector(".page-divider")) {
      let bg = document.querySelector(".page-divider");
      bg.animate(
        {
          backgroundPosition: `50% 50%`,
        },
        { duration: 2400, fill: "both" }
      );
    }
  };

  function setBg(x, y) {
    if (x && y && document.querySelector(".page-divider")) {
      let bg = document.querySelector(".page-divider");
      bg.animate(
        {
          backgroundPosition: `${ogBgX + x}% ${ogBgY + y}%`,
        },
        { duration: 1200, fill: "both" }
      );
      ogBgX += x;
      ogBgY += y;
    }
  }

  useEffect(() => {
    divTitle = document.getElementById("divider-title-container");
  }, []);

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <DividerDiv
        bgX={moveFactor[0]}
        bgY={moveFactor[1]}
        mouseMove={moveBackground}
        mouseLeave={resetBackground}
      >
        {/* <div id="divider-title-container" className={isActive}> */}
        <div id="divider-title-container">{children}</div>
      </DividerDiv>
    </>
  );
}
