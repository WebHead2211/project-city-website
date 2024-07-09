import { useEffect, useState } from "react";

let spanIndex = 0;
let charIndex = 0;
let waitingTime = 100;

export default function AnimatedHeading({ heading, subHeading, dynamicWords }) {
  const [span, setNewSpan] = useState("");
  const [isChanging, setIsChanging] = useState(false);
  const [focus, setFocus] = useState(true);

  let myTimeout;

  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      setFocus(true);
    } else {
      setFocus(false);
    }
  });

  const addLetter = () => {
    if (!focus) return;
    if (charIndex == dynamicWords[spanIndex].length) {
      spanIndex = spanIndex < dynamicWords.length - 1 ? (spanIndex += 1) : 0;
      charIndex = 0;
      clearInterval(interval);
      return;
    }
    setNewSpan((oldSpan) => {
      return oldSpan + dynamicWords[spanIndex][charIndex];
    });
    charIndex++;
  };

  let interval;

  function set() {
    clearTimeout(myTimeout);
    clearInterval(interval);
    setNewSpan("");
    interval = setInterval(addLetter, waitingTime);
  }

  useEffect(() => {
    if (!isChanging) {
      set();
    }
    myTimeout = setTimeout(() => {
      setIsChanging((isChanging) => !isChanging);
    }, 2000);
  }, [isChanging]);

  return (
    <>
      <h1
        className="merriweather-bold hidden"
        style={{ transition: "0.5s ease" }}
      >
        {heading}
      </h1>
      <h2
        className="animated-h2 hidden lobster-regular"
        style={{
          backgroundColor: "var(--red-primary)",
          borderRadius: "12px",
          boxShadow: "0px 0px 10px 0 black",
          textShadow: "none",
          transition: "0.5s ease",
        }}
      >
        {`${subHeading[0]} `}
        <span className="lobster-regular">{`${span}`}</span>
        {` ${subHeading[1]}`}
      </h2>
    </>
  );
}
