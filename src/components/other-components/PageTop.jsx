import { useEffect, useState } from "react";
import "../../styles/PageTop.css";
import AnimatedHeading from "../home-components/AnimatedHeading";

export default function PageTop({
  title,
  subTitle,
  changeSubtitle,
  changeWord,
  id,
  children,
  gallery = true,
}) {
  let currentImageIndex = 1;
  let pageImageArray;
  let buttonContent;

  const topTitle = (
    <>
      <h1
        className="merriweather-bold hidden"
        style={{ transition: "0.5s ease" }}
      >
        {title}
      </h1>
      <h2
        className="merriweather-regular hidden"
        style={{ transition: "0.5s ease" }}
      >
        {subTitle}
      </h2>
    </>
  );

  setInterval(() => {
    // if (document.documentElement.scrollTop > 500) return;
    if (!gallery) return;
    if (pageImageArray && document.documentElement.scrollTop < 500) {
      pageImageArray.forEach((image, index) => {
        if (index != currentImageIndex) {
          image.className = "home-image home-image-inactive";
        } else {
          image.className = "home-image home-image-active";
        }
      });
      if (currentImageIndex < pageImageArray.length - 1) {
        currentImageIndex++;
      } else {
        currentImageIndex = 0;
      }
    }
  }, 3000);

  useEffect(() => {
    pageImageArray = document.querySelectorAll(".home-image");
  }, []);

  return (
    <>
      <div className="top-container" id={id}>
        {children}
        <div className="top-title-container">
          {changeWord ? (
            <AnimatedHeading
              heading={title}
              subHeading={changeSubtitle}
              dynamicWords={changeWord}
            />
          ) : (
            topTitle
          )}
        </div>
      </div>
    </>
  );
}
