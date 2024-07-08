import Navigation from "../other-components/Navigation";
import PageDesc from "../other-components/PageDesc";
import PageTop from "../other-components/PageTop";
import Featured from "../other-components/Featured";
import ImageSlider from "../other-components/ImageSlider";
import { restaurant } from "../../data/restaurant";
import "../../styles/Restaurant.css";
import RestaurantItem from "./RestaurantItem";
import revealAnimation from "../animation-effect/revealAnimation";
import { useEffect, useState } from "react";

const featuredArray = [
  {
    name: restaurant[0].name,
    id: restaurant[0].id,
    image: restaurant[0].pictures[0],
  },
  {
    name: restaurant[1].name,
    id: restaurant[1].id,
    image: restaurant[1].pictures[0],
  },
  {
    name: restaurant[2].name,
    id: restaurant[2].id,
    image: restaurant[2].pictures[0],
  },
];

export default function Restaurant() {
  const [filtered, setFiltered] = useState([...restaurant]);
  const [type, setType] = useState("restaurant");

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

  const makeList = () => {
    let listArray = [];
    if (type === "all") {
      restaurant.forEach((item) => {
        listArray.push(item);
      });
    } else {
      restaurant.forEach((item) => {
        if (item.subType === type) {
          listArray.push(item);
        }
      });
    }
    setFiltered([...listArray]);
  };

  function filterClick(e, query) {
    let buttons = document.querySelectorAll(".restaurant-filter-btn");
    buttons.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setType(query);
  }

  useEffect(() => {
    makeList(type);
  }, [type]);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    revealAnimation();
  }, []);

  useEffect(() => {
    const restaurants = document.querySelectorAll(".restaurant-item");
    restaurants.forEach((item) => {
      item.animate(restaurantGrow, restaurantGrowTiming);
    });
  }, [filtered]);

  return (
    <>
      <PageTop
        title={"Bars and Restaurants"}
        subTitle={"Savor Mumbai's Flavors"}
        id={"page-top-container"}
      >
        <img
          src="./images/restaurant/restaurant-bg-0.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="./images/restaurant/restaurant-bg-1.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="./images/restaurant/restaurant-bg-2.jpg"
          alt="Mumbai"
          className="home-image"
        />
      </PageTop>
      <Navigation>{["home", "restaurants"]}</Navigation>
      <PageDesc
        title="Dining Destinations"
        text="Explore Mumbai's diverse culinary scene, from hidden street food treasures to elegant fine dining establishments. Discover trendy bars, vibrant cafes, and nightlife hotspots that capture the city's eclectic flavors and energetic vibe"
      />
      <Featured
        title={"Featured Restaurants"}
        image={"./images/restaurant/restaurant-bg.jpg"}
      >
        <div
          id="featured-slider"
          className="hidden"
          style={{ transition: "0.5s ease" }}
        >
          <ImageSlider
            type="restaurant"
            featured={true}
            imgUrls={featuredArray}
          />
        </div>
      </Featured>
      <div className="hidden" style={{ transition: "0.5s ease" }}>
        <h1 className="mid-page-heading merriweather-bold">
          All Restaurants/Bars
        </h1>
      </div>
      <div className="restaurant-list-container">
        <div className="restaurant-filter-container roboto-condensed">
          <div
            className="restaurant-filter-btn active"
            onClick={(e) => {
              filterClick(e, "restaurant");
            }}
          >
            Restaurants
          </div>
          <div
            className="restaurant-filter-btn"
            onClick={(e) => {
              filterClick(e, "bar");
            }}
          >
            Bars and Pubs
          </div>
        </div>
        <div className="restaurant-list">
          {filtered[0] &&
            filtered.map((item) => <RestaurantItem item={item} />)}
        </div>
      </div>
    </>
  );
}
