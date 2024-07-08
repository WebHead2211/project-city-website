import revealAnimation from "../animation-effect/revealAnimation";
import { useEffect } from "react";

export default function DividerDiv({
  children,
  bgX,
  bgY,
  mouseMove,
  mouseLeave,
}) {
  useEffect(() => {
    revealAnimation();
  }, []);

  if (bgX && bgY && document.querySelector(".page-divider")) {
    document.querySelector(
      ".page-divider"
    ).style.backgroundPosition = `${bgX}% ${bgY}%`;
  }
  return (
    <>
      <div
        id="id-page-divider"
        className="page-divider hidden"
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
      >
        {children}
      </div>
    </>
  );
}
