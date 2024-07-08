import "../../styles/PageInfo.css"
import { useEffect } from "react";
import revealAnimation from "../animation-effect/revealAnimation";

export default function PageDesc({title, text}) {

    useEffect(() => {
        revealAnimation();
      }, []);

    return(
        <>
            <h1 id="scroll-here" className="page-desc-heading merriweather-bold hidden" style={{textTransform:"capitalize", color: "var(--red-primary)", transition: "0.5s ease"}}>{title}</h1>
            <p className="page-desc-text roboto-bold hidden" style={{transition: "0.5s ease"}}>{text}</p>
        </>
    )
}