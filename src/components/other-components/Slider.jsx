import { useEffect, useState } from "react";
import "../../styles/Slider.css";
import SliderItem from "./SliderItem";

export default function Slider({ arr, type }) {
  let sliderList;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    sliderList = document.querySelectorAll(".slider-item[data-index]");
    if (currentIndex < sliderList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevItem = () => {
    sliderList = document.querySelectorAll(".slider-item[data-index]");
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(sliderList.length - 1);
    }
  };

  const customItem = (e) => {
    let buttonList = document.querySelectorAll(".slider-circle-button");
    buttonList.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    let customIndex = +e.target.dataset.index;
    if (customIndex == currentIndex) return;
    sliderList = document.querySelectorAll(".slider-item[data-index]");
    sliderList.forEach((item, index) => {
      item.classList.remove("active");
      item.classList.remove("next");
      item.classList.remove("prev");
    });
    setCurrentIndex(customIndex);
  };

  const setActive = () => {
    sliderList = document.querySelectorAll(".slider-item[data-index]");
    sliderList.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("next");
      item.classList.remove("prev");
    });
    sliderList[currentIndex].classList.add("active");
    let prevIndex = currentIndex > 0 ? currentIndex - 1 : sliderList.length - 1;
    let nextIndex = currentIndex < sliderList.length - 1 ? currentIndex + 1 : 0;
    sliderList[prevIndex].classList.add("prev");
    sliderList[nextIndex].classList.add("next");
    let buttonList = document.querySelectorAll(".slider-circle-button");
    buttonList.forEach((button) => {
      button.classList.remove("active");
    });
    buttonList[currentIndex].classList.add("active");
  };

  useEffect(() => {
    setActive();
  }, [currentIndex]);

  return (
    <>
      <div id="hotel-slider-container">
        <div id="slider">
          {arr.map((item) => {
            return (
              <SliderItem
                type={type}
                name={item.name}
                image={item.image}
                index={item.id}
                id={item.id}
              />
            );
          })}
          <div id="slider-circle-button-container">
            {arr.map((item, index) => {
              let classActive = "";
              if (index == 0) {
                classActive = "active";
              }
              return (
                <button
                  className={`slider-circle-button ${classActive}`}
                  data-index={index}
                  onClick={(e) => {
                    customItem(e);
                  }}
                ></button>
              );
            })}
          </div>
          <button
            className="slider-arrow-button"
            id="arrow-prev"
            onClick={() => prevItem()}
          >
            {"<"}
          </button>
          <button
            className="slider-arrow-button"
            id="arrow-next"
            onClick={() => nextItem()}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}
