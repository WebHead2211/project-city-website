import "../../styles/Home.css";
import PageInfo from "../other-components/PageInfo";
import Divider from "../divider-components/Divider";
import PageTop from "../other-components/PageTop";
import { useEffect, useState } from "react";
import AllLocations from "../other-components/AllLocations";
import { dataArray } from "../../data/hotels";
import { activities } from "../../data/activities";
import { restaurant } from "../../data/restaurant";
import revealAnimation from "../animation-effect/revealAnimation";

export default function Home() {
  const allData = [...dataArray, ...activities.data, ...restaurant];

  const [selection, setSelection] = useState("hotel");

  const mapClick = (e, n) => {
    setSelection(n);
    let list = document.querySelectorAll(".complete-page-container");
    list.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  };

  useEffect(() => {
    revealAnimation();
  }, []);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <PageTop
        title={"Mumbai"}
        subTitle={"The Smart City"}
        changeWord={["Smart", "Dream", "Vibrant"]}
        changeSubtitle={["The", "City"]}
      >
        <img
          src="./images/home/mumbai-3.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="./images/home/mumbai-2.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="./images/home/mumbai-4.jpg"
          alt="Mumbai"
          className="home-image"
        />
      </PageTop>
      <PageInfo
        title="Mumbai, Maharasthra"
        subTitle="City of Dreams"
        description={`Mumbai is a bustling metropolis on India's west coast. It's a vibrant mix of cultures, cuisines, and colors, where Bollywood stars, historic architecture, and seaside promenades come together.`}
      />
      <div className="hidden" style={{ transition: "0.5s ease" }}>
        <h1 className="mid-page-heading merriweather-bold">
          All of Mumbai in One Place
        </h1>
      </div>
      {/* <Divider title="Hidden Gems and Iconic Attractions" /> */}

      {/* <AllLocations data={allData} /> */}
      <div id="complete-map-container">
        <div
          className="complete-map hidden"
          style={{ transition: "0.5s ease" }}
        >
          <AllLocations data={allData} selected={selection} />
        </div>
        <div className="complete-map-pages">
          <div
            className="active complete-page-container hidden"
            style={{
              backgroundImage: "url(./images/hotels/hotel-bg.jpg)",
              transition: "0.5s ease",
            }}
            onClick={(e) => mapClick(e, "hotel")}
          >
            <h1>Hotels</h1>
          </div>
          <div
            className="complete-page-container hidden"
            style={{
              backgroundImage: "url(./images/activities/activities-2.jpg)",
              transition: "0.5s ease",
            }}
            onClick={(e) => mapClick(e, "activity")}
          >
            <h1>Activities</h1>
          </div>
          <div
            className="complete-page-container hidden"
            style={{
              backgroundImage: "url(./images/restaurant/restaurant-bg-2.jpg)",
              transition: "0.5s ease",
            }}
            onClick={(e) => mapClick(e, "restaurant")}
          >
            <h1>Restaurants</h1>
          </div>
        </div>
      </div>
    </>
  );
}
