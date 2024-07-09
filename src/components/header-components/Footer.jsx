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

  const [dataInfo, setDataInfo] = useState();

  async function forecast(query) {
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=ee972bd4adba466aa63145904232207&q=${query}`,
        {
          mode: "cors",
        }
      );
      const info = await data.json();
      setDataInfo(info);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    forecast("Mumbai");
  }, []);

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
          <a href="https://www.youtube.com/@webhead_22" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://twitter.com/Mumbai" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/mymumbai/?hl=en" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/WebHead2211/project-city-website"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="name-container">
          <a
            href="https://github.com/WebHead2211/project-city-website"
            target="_blank"
          >
            Aayush Bakre
          </a>
        </div>
        <div className="weather-container">
          {dataInfo ? (
            <>
              <img src={dataInfo.current.condition.icon} />
              <a
                href="https://weather.com/en-IN/weather/today/l/cb022e27867bb250b801b119170ab9889e1bc3b65e50c76798362b7f95d29248"
                target="_blank"
              >
                {Math.round(dataInfo.current.temp_c)}°C
              </a>
            </>
          ) : (
            <>
              <img src={"//cdn.weatherapi.com/weather/64x64/day/353.png"} />
              <p>28°C</p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
