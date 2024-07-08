import ImageSlider from "./ImageSlider";
import "../../styles/SinglePage.css";
import { NavLink, useParams } from "react-router-dom";
import { activities } from "../../data/activities";
import { restaurant } from "../../data/restaurant";
import Map from "./Map";
import { useEffect, useState } from "react";
import FullPageMap from "./FullPageMap";
import revealAnimation from "../animation-effect/revealAnimation";

let example = {
  name: "Name of thing",
  timing: "Dates and Timing",
  shortDescription: `What sounds more delicious than a fresh handcrafted wood-fired
            pizza? From the Meat Lovers pizza to The Garden pizza, Big River
            Pizza offers a large selection of meat, veggie, or
            build-your-own pizzas. In fact, Big River Pizza has sold over
            20,000 slices of pizza!
                
            Using a wood fire dome to cook the dough, Big River Pizza is
            determined to serve the highest quality of flavor to their
            guests. The traditional yet vibrant ingredients are locally
            grown, hence why Big River Pizza is located in Lowertown, right
            across the street from the Farmers' Market.
                
            Aside from pizza, beer, wine, and other small dishes are
            available. Customers are known to leave satisfied with full
            bellies! Private dining, catering, as well as online ordering
            are offered.`,
  address: `280 5th St E Saint Paul, Minnesota 55101 Phone (651) 683-2186`,
  location: [19.075984, 72.877656],
  imgArray: [
    "./images/hotels/hotel-0.jpg",
    "./images/hotels/hotel-1.jpg",
    "./images/hotels/hotel-2.jpg",
  ],
};

export default function SinglePage({ type }) {
  const [map, setMap] = useState(false);

  const makeMap = () => {
    setMap(true);
  };

  const closeMap = () => {
    setMap(false);
  };

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  const { id } = useParams();
  let item;
  if (type === "activity") {
    activities.data.forEach((act) => {
      if (act.id === id) {
        item = { ...act };
      }
    });
  } else if (type === "restaurant") {
    restaurant.forEach((act) => {
      if (act.id === id) {
        item = { ...act };
      }
    });
  }
  let location;
  let url;
  let back;
  if (type === "activity") {
    location = [item.geoCode.latitude, item.geoCode.longitude];
    url = item.bookingLink;
    back = "activity";
  } else {
    location = item.location;
    url = item.website;
    // url = "www.google.com";
    back = "restaurant";
  }

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      {map && (
        <FullPageMap close={closeMap} location={location} name={item.name} />
      )}
      <div className="single-page-container">
        <div className="single-page-main">
          <div className="single-page-nav">
            <ul>
              <li>{"<"}</li>
              <NavLink to={`/`}>
                <li>Home</li>
              </NavLink>
              <li>{"<"}</li>
              <NavLink to={`/${back}`}>
                <li style={{textTransform: "capitalize"}}>{type}</li>
              </NavLink>
            </ul>
          </div>
          <h1
            className="single-page-heading merriweather-bold hidden"
            style={{ transition: "0.5s ease" }}
          >
            {item.name}
          </h1>
          {type === "activity" && (
            <h2
              className="single-page-subHeading sofia-sans-extra-condensed hidden"
              style={{ transition: "0.5s ease" }}
            >
              {`Minimum Time: ${item.timing}`}
            </h2>
          )}
          <div
            className="image-map-container hidden"
            style={{ transition: "0.5s ease" }}
          >
            <div className="single-page-gallery">
              <ImageSlider imgUrls={item.pictures} />
            </div>
            <div className="single-page-map">
              <Map loc={location} name={item.name} />
            </div>
          </div>
          <div className="single-page-content">
            <div className="left">
              <h2
                className="single-page-subHeading sofia-sans-extra-condensed hidden"
                style={{ transition: "0.5s ease" }}
              >
                Overview
              </h2>
              <p
                className="single-page-para roboto-regular hidden"
                id="single-page-overview"
                style={{ transition: "0.5s ease" }}
              >
                {item.description}
              </p>
              {type === "restaurant" && (
                <>
                  <h2
                    className="single-page-subHeading sofia-sans-extra-condensed hidden"
                    style={{ transition: "0.5s ease" }}
                  >
                    CUISINE
                  </h2>
                  <p
                    className="single-page-para roboto-regular hidden"
                    id="single-page-overview"
                    style={{ transition: "0.5s ease" }}
                  >
                    {item.cuisine}
                  </p>
                </>
              )}
            </div>
            <div className="right">
              <h2
                className="hidden"
                style={{
                  color: "var(--red-primary)",
                  fontSize: "30px",
                  transition: "0.5s ease",
                }}
              >
                {item.name}
              </h2>
              <div className="address-container">
                <p
                  className="address hidden"
                  style={{ transition: "0.5s ease" }}
                >
                  {item.address
                    ? item.address
                    : `${location}, Mumbai, Maharashtra`}
                </p>
                <a
                  href={url}
                  target="_blank"
                  className="hidden"
                  style={{
                    transition: "0.5s ease",
                    color: "var(--red-primary)",
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <i className="fa-solid fa-desktop"></i>
                  </span>
                  Visit Website
                </a>
                <div
                  className="hours hidden"
                  style={{ transition: "0.5s ease" }}
                >
                  <h3>Hours</h3>
                  <p>See website for hours.</p>
                </div>
              </div>
              <div
                className="save-map-button hidden"
                style={{ transition: "0.5s ease" }}
              >
                <button
                  className="roboto-bold"
                  id="save-button"
                  onClick={() => {
                    document.getElementById("heart").style.display =
                      document.getElementById("heart").style.display ===
                      "inline-block"
                        ? "none"
                        : "inline-block";
                    document.getElementById("solid-heart").style.display =
                      document.getElementById("solid-heart").style.display ===
                      "none"
                        ? "inline-block"
                        : "none";
                  }}
                >
                  <span>
                    <i class="fa-regular fa-heart" id="heart"></i>
                    <i class="fa-solid fa-heart" id="solid-heart"></i>
                  </span>
                  Save
                </button>
                <button
                  className="roboto-bold"
                  id="map-button"
                  onClick={makeMap}
                >
                  <i class="fa-solid fa-location-dot"></i> Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
