import PageTop from "./PageTop";
import Navigation from "./Navigation";
import PageDesc from "./PageDesc";
import revealAnimation from "../animation-effect/revealAnimation";
import { useState, useEffect } from "react";
import "../../styles/Smart.css";
import ImageSlider from "./ImageSlider";
import { projects } from "../../data/projects";

export default function Smart() {
  const [type, setType] = useState("about");

  const smartBtn = (e, word) => {
    let buttons = document.querySelectorAll(".smart-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    setType(word);
    // document.getElementById("smart-container").scrollIntoView();
  };

  
  const restaurantGrow = [
    { transform: "scale(0.7)", opacity: "0" },
    { transform: "scale(1)", opacity: "1" },
  ];
  
  const restaurantGrowTiming = {
    duration: 500,
    iterations: 1,
    easing: "ease",
    fill: "both",
  };
  
  useEffect(() => {
    revealAnimation();
  }, []);
  
  useEffect(() => {
    const restaurants = document.querySelectorAll(".animate");
    restaurants.forEach((item) => {
      item.animate(restaurantGrow, restaurantGrowTiming);
    });
  }, [type]);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <PageTop
        title={"Smart City"}
        subTitle={"Innovation for a Sustainable Future"}
        id="page-top-container"
        button={true}
      >
        <img
          src="./images/smart/smart-bg-2.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="./images/smart/smart-bg.jpg"
          alt="Mumbai"
          className="home-image"
        />
      </PageTop>
      {/* <a href="#scroll-here" className="scroll-down roboto-condensed">Learn More</a> */}
      <Navigation>{["home", "Smart City"]}</Navigation>
      <PageDesc
        title="Transforming Mumbai"
        text="The Mumbai Smart City initiative aims to transform Mumbai into a more sustainable, efficient, and livable city by leveraging technology and innovation. Key projects focus on improving infrastructure, public services, and urban mobility, while enhancing safety and promoting environmental sustainability."
      />
      <div className="smart-content">
        {/* <div className="smart-blur"></div> */}
        <div className="smart-navigation">
          <button
            className="smart-btn active hidden"
            onClick={(e) => smartBtn(e, "about")}
            style={{transition: "0.5s ease"}}
          >
            <span className="sofia-sans-extra-condensed">About</span>
          </button>
          <button
            className="smart-btn roboto-condensed hidden"
            onClick={(e) => smartBtn(e, "project")}
            style={{transition: "0.5s ease"}}
          >
            <span className="sofia-sans-extra-condensed">Projects</span>
          </button>
        </div>
        <div
          id="smart-container"
          className="hidden"
          style={{ transition: "0.5s ease" }}
        >
          {type === "about" ? (
            <>
              <div className="smart-about-container">
                <div className="smart-about-section">
                  <div className="smart-about animate">
                    <h1 className="sofia-sans-extra-condensed">Mission</h1>
                    <p className="roboto-condensed">
                      The mission of the Mumbai Smart City initiative is to
                      transform Mumbai into a world-class metropolis by
                      harnessing cutting-edge technology and innovative
                      solutions. This mission focuses on enhancing the quality
                      of life for all residents, fostering economic growth, and
                      ensuring sustainable development. The initiative aims to
                      create a city that is efficient, resilient, and inclusive,
                      where citizens can enjoy improved infrastructure, seamless
                      connectivity, and superior public services.
                    </p>
                  </div>
                  <div
                    className="about-image animate"
                    style={{
                      backgroundImage: "url(./images/smart/smart-1.jpg)",
                    }}
                  ></div>
                </div>
                <div className="smart-about-section">
                  <div
                    className="about-image animate"
                    style={{
                      backgroundImage: "url(./images/smart/smart-2.jpg)",
                    }}
                  ></div>
                  <div className="smart-about animate">
                    <h1 className="sofia-sans-extra-condensed">Vision</h1>
                    <p className="roboto-condensed">
                      The vision is to establish Mumbai as a leading global
                      smart city by promoting sustainability, connectivity,
                      innovation, and inclusivity. This includes enhancing
                      public services, supporting economic activities, ensuring
                      safety and security, and building resilience. The
                      initiative aims to create an efficient, resilient, and
                      inclusive urban environment where all residents enjoy
                      improved infrastructure and superior quality of life.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="smart-project">
                <div className="project-slider">
                  <ImageSlider imgUrls={projects} smart={true} />
                </div>
              </div>
              <div className="small-screen-slider">
                {projects.map((url) => (
                  <>
                    <div
                      key={url}
                      className="small-slider-div hidden"
                      style={{
                        backgroundImage: `url(${url.image})`,
                        transition: "0.5s ease",
                      }}
                    >
                      <div className="small-slider-filter"></div>
                      <h1 className="small-slider-title roboto-condensed">
                        {url.name}
                      </h1>
                      <p className="small-slider-text roboto-condensed">
                        {url.description}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
