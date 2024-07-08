import { useState, useEffect } from "react";
import "../../styles/ImageSlider.css";
import { NavLink } from "react-router-dom";
import revealAnimation from "../animation-effect/revealAnimation";

let active;

export default function ImageSlider({
  imgUrls,
  featured = false,
  type,
  smart = false,
}) {
  let url =
    type === "hotel"
      ? "hotel"
      : type === "activity"
      ? "activity"
      : "restaurant";
  const [imageIndex, setImageIndex] = useState(0);
  if (featured) {
  }
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imgUrls.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imgUrls.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  useEffect(() => {
    revealAnimation();
  }, []);

  if (!featured) {
    if (smart) {
      return (
        <>
          <div className="big-screen-slider"
            style={{
              width: "33.33%",
              height: "100%",
              position: "relative",
              margin: "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "-100%",
                margin: "auto",
                backdropFilter: "blur(10px)",
                zIndex: "10",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                right: "-100%",
                margin: "auto",
                backdropFilter: "blur(10px)",
                zIndex: "10",
              }}
            ></div>

            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              {imgUrls.map((url) => (
                <>
                  <div
                    key={url}
                    className="img-slider-div hidden"
                    style={{
                      translate: `${-100 * imageIndex}%`,
                      backgroundImage: `url(${url.image})`,
                      transition: "0.5s ease",
                    }}
                  >
                    <div className="img-slider-div-filter"></div>
                    <p className="img-slider-text roboto-condensed">
                      {url.description}
                    </p>
                    <h1 className="img-slider-title roboto-condensed">
                      {url.name}
                    </h1>
                  </div>
                </>
              ))}
            </div>
            <button
              onClick={showPrevImage}
              className="smart-img-slider-btn"
              style={{ left: "0" }}
            >
              {"<"}
            </button>
            <button
              onClick={showNextImage}
              className="smart-img-slider-btn"
              style={{ right: "0" }}
            >
              {">"}
            </button>
            <div
              style={{
                position: "absolute",
                bottom: "5px",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: "10px",
              }}
            >
              {imgUrls.map((url, index) => {
                active = index === imageIndex ? "active" : "";
                return (
                  <button
                    key={`dotButton-${index}`}
                    className={`img-slider-dot-btn ${active}`}
                    onClick={(e) => {
                      setImageIndex(index);
                      document
                        .querySelectorAll(".img-slider-dot-btn")
                        .forEach((btn) => btn.classList.remove("active"));
                      e.target.classList.add("active");
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflowX: "hidden",
            }}
          >
            {imgUrls.map((url) => (
              <>
                <img
                  key={url}
                  src={url}
                  className="img-slider-img"
                  style={{ translate: `${-100 * imageIndex}%` }}
                />
              </>
            ))}
          </div>
          <button
            onClick={showPrevImage}
            className="img-slider-btn"
            style={{ left: "0" }}
          >
            {"<"}
          </button>
          <button
            onClick={showNextImage}
            className="img-slider-btn"
            style={{ right: "0" }}
          >
            {">"}
          </button>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              left: "50%",
              translate: "-50%",
              display: "flex",
              gap: "10px",
            }}
          >
            {imgUrls.map((url, index) => {
              active = index === imageIndex ? "active" : "";
              return (
                <button
                  key={`dotButton-${index}`}
                  className={`img-slider-dot-btn ${active}`}
                  onClick={(e) => {
                    setImageIndex(index);
                    document
                      .querySelectorAll(".img-slider-dot-btn")
                      .forEach((btn) => btn.classList.remove("active"));
                    e.target.classList.add("active");
                  }}
                ></button>
              );
            })}
          </div>
        </div>
      );
    }
  } else {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          {imgUrls.map((item, index) => (
            <div
              key={`div-${item.name}-${index}`}
              style={{
                backgroundImage: `url(${item.image})`,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexShrink: "0",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                translate: `${-100 * imageIndex}%`,
                transition: "0.3s ease",
                position: "relative",
              }}
            >
              <div
                key={`div-${item.name}-${index}`}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(5px)",
                }}
              ></div>
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  position: "relative",
                }}
              />
            </div>
          ))}
          <button
            onClick={showPrevImage}
            className="img-slider-btn"
            style={{ left: "0" }}
          >
            {"<"}
          </button>
          <button
            onClick={showNextImage}
            className="img-slider-btn"
            style={{ right: "0" }}
          >
            {">"}
          </button>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              translate: "-50%",
              display: "flex",
              gap: "10px",
            }}
          >
            {imgUrls.map((item, index) => {
              active = index === imageIndex ? "active" : "";
              return (
                <button
                  key={index}
                  className={`img-slider-dot-btn ${active}`}
                  onClick={(e) => {
                    setImageIndex(index);
                    document
                      .querySelectorAll(".img-slider-dot-btn")
                      .forEach((btn) => btn.classList.remove("active"));
                    e.target.classList.add("active");
                  }}
                ></button>
              );
            })}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          {imgUrls.map((item, index) => (
            <div
              key={`div-${item.name}-${index}`}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                translate: `${-100 * imageIndex}%`,
                transition: "translate 0.3s ease",
                position: "relative",
              }}
              className="featured-title-text-container"
            >
              <h2
                key={`h2-${item.name}-${index}`}
                className="merriweather-bold slider-title"
              >
                {item.name}
              </h2>
              {item.rating && (
                <h3
                  key={`h3-${item.name}-${index}`}
                  style={{
                    margin: "0",
                    color: "white",
                    fontSize: "30px",
                    color: "var(--red-primary)",
                  }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </h3>
              )}

              <NavLink to={`/${url}/${item.id}`} key={item.id}>
                <p className="roboto-bold learn-more">Learn More</p>
              </NavLink>
            </div>
          ))}
        </div>
      </>
    );
  }
}
