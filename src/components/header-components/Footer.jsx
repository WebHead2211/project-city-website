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
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
      <div className="footer-right">
        <div className="name-container">
          <p>Aayush Bakre</p>
        </div>
        <div className="weather-container">
          {dataInfo ? (
            <>
              <img src={dataInfo.current.condition.icon} />
              <p>{Math.floor(dataInfo.current.temp_c)}°C</p>
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
