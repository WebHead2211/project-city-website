import PageTop from "../other-components/PageTop";
import Navigation from "../other-components/Navigation";
import Slider from "../other-components/Slider";
import Featured from "../other-components/Featured";
import "../../styles/Activities.css";
import { activities } from "../../data/activities";
import FeaturedActivity from "./FeaturedActivity";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ImageSlider from "../other-components/ImageSlider";
import PageDesc from "../other-components/PageDesc";
import revealAnimation from "../animation-effect/revealAnimation";

const featuredArray = [
  {
    name: "Gateway of India",
    id: 0,
    image:
      "https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Marine Drive",
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Marine_Drive_Skyline.jpg",
  },
  {
    name: "Juhu Beach",
    id: 5,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ab/77/f9/img-20190525-192344-01.jpg?w=1200&h=-1&s=1",
  },
];

export default function Activity() {
  const selectAct = (index, item) => {
    setCurrAct(item);
    let acts = document.querySelectorAll(".activity-list-item");
    acts.forEach((act) => act.classList.remove("active"));
    acts[index].classList.add("active");
  };

  const [currAct, setCurrAct] = useState(activities.data[0]);

  useEffect(() => {
    revealAnimation();
  }, []);
  
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <PageTop
        title={"Things to do"}
        subTitle={"Explore Mumbai's Best"}
        id="page-top-container"
      >
        <img
          src="./images/activities/activities-1.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="https://www.whileimyoung.com/wp-content/uploads/2019/12/mumbai2_hotel.jpg"
          alt="Mumbai"
          className="home-image"
        />
      </PageTop>
      <Navigation>{["home", "things-to-do"]}</Navigation>
      <PageDesc
        title="Places to Discover"
        text="Mumbai offers a wealth of activities, from exploring historic landmarks and vibrant markets to enjoying beaches and savoring diverse cuisine. The city's dynamic culture ensures there's always something exciting to do."
      />
      <Featured
        title={"Featured Activities"}
        image={"./images/activities/activities-2.jpg"}
      >
        {/* <Slider arr={featuredArray} /> */}
        <div
          id="featured-slider"
          className="hidden"
          style={{ transition: "0.5s ease" }}
        >
          <ImageSlider
            type="activity"
            featured={true}
            imgUrls={featuredArray}
          />
        </div>
      </Featured>
      <div className="hidden" style={{ transition: "0.5s ease" }}>
        <h1 className="mid-page-heading merriweather-bold">All Activities</h1>
      </div>
      <div id="activity-list-container">
        <div className="activity-map-container">
          <FeaturedActivity activity={currAct} />
        </div>
        <div className="activity-list">
          {activities.data.map((item, index) => {
            let active = index == 0 ? "active" : "";
            return (
              <div
                className={`activity-list-item ${active} hidden`}
                key={item.id}
                onClick={() => selectAct(index, item)}
              >
                <h1>{item.name}</h1>
                <p>{item.shortDescription}</p>
                <NavLink to={`project-city-website/activity/${item.id}`} key={item.id}>
                  <button>More Details</button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
