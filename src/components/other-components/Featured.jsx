import { useEffect } from "react";
import revealAnimation from "../animation-effect/revealAnimation";
import "../../styles/Featured.css";

export default function Featured({ title, children, image }) {

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <div id="featured-container">
        <div>
          <div id="featured-title" style={{backgroundImage: `url(${image})`, transition: "0.5s ease"}} className="hidden">
            <h1>{title}</h1>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
