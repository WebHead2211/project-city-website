import { useEffect, useState } from "react";
import "../../styles/SingleHotelPage.css";
import ImageSlider from "../other-components/ImageSlider";
import { NavLink } from "react-router-dom";
import Map from "../other-components/Map";
import { useParams } from "react-router-dom";
import { dataArray } from "../../data/hotels";
import revealAnimation from "../animation-effect/revealAnimation";

let example = {
  type: "hotel",
  name: "Hyatt Regency",
  rating: 5,
  price: 7,
  coords: [19.1036924, 72.8686004],
  id: 0,
  description: `Hyatt Regency Mumbai is the city's premier gateway hotel, offering a contemporary and stylish hotel experience. Located a kilometre from the international airport and less than 15 minutes from the domestic terminals, the hotel provides easy access to the rapidly growing business, shopping and commercial centres of North Mumbai. The location enables us to design a range of carefully crafted facilities and services to address the increasingly sophisticated needs of domestic and international business travelers, along with corporate meeting organizers and decision-makers.`,
  address: "Sahar Airport Road, Mumbai, Maharashtra, India, 400099",
  image: [
    "./images/hotels/hotel-0.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0b/2a/cc/king-room.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0b/24/6f/lobby-lounge.jpg?w=1200&h=-1&s=1",
  ],
  website:
    "https://www.tripadvisor.in/Hotel_Review-g304554-d307098-Reviews-Hyatt_Regency_Mumbai-Mumbai_Maharashtra.html",
  phone: "+91 22 6634 1234",
};

export default function SingleHotelPage() {
  const { id } = useParams();
  let currentHotel;

  dataArray.forEach((item) => {
    if (item.id == id) {
      currentHotel = { ...item };
    }
  });

  const [map, setMap] = useState(false);

  const [btnText, setBtnText] = useState("Map");

  const showMap = () => {
    let btn = document.getElementById("map-toggle-btn");
    setMap((old) => !old);
  };

  let stars = Array.apply(null, Array(currentHotel.rating)).map(function () {});

  const hotelGrow = [{ transform: "scale(0.7)" }, { transform: "scale(1)" }];

  const hotelGrowTiming = {
    duration: 500,
    iterations: 1,
    easing: "ease",
  };

  useEffect(() => {
    const hotel = document.querySelector(".hotel-page-slider");
    hotel.animate(hotelGrow, hotelGrowTiming);
  }, [map]);

  useEffect(() => {
    if (map) {
      setBtnText("Pictures");
    } else {
      setBtnText("Map");
    }
  }, [map]);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <div className="hotel-page-container">
        <div className="hotel-page">
          <div className="single-page-nav">
            <ul>
              <li>{"<"}</li>
              <NavLink to={`/hotel`}>
                <li>Back</li>
              </NavLink>
            </ul>
          </div>
          <div className="hotel-page-name">
            <h1 className="hidden" style={{ transition: "0.5s ease" }}>
              {currentHotel.name}
            </h1>
            <div className="hidden" style={{ transition: "0.5s ease" }}>
              {stars.map(() => (
                <i className="fa-solid fa-star"></i>
              ))}
            </div>
          </div>
          <div className="hotel-page-content">
            <div className="hotel-page-text">
              <h2
                className="sofia-sans-extra-condensed hidden"
                style={{ transition: "0.5s ease" }}
              >
                Overview
              </h2>
              <p className="hidden" style={{ transition: "0.5s ease" }}>
                {currentHotel.description}
              </p>
              <p className="hidden" style={{ transition: "0.5s ease" }}>
                <span style={{ marginRight: "10px" }}>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                {currentHotel.address}
              </p>
              <p className="hidden" style={{ transition: "0.5s ease" }}>
                <span style={{ marginRight: "10px" }}>
                  <i className="fa-solid fa-phone"></i>
                </span>
                {currentHotel.phone}
              </p>
              <div
                className="hotel-page-btn-container hidden"
                style={{ transition: "0.5s ease" }}
              >
                <button id="map-toggle-btn" onClick={showMap}>
                  {`View ${btnText}`}
                </button>
                <a href={currentHotel.website} target="_blank">
                  Book Now
                </a>
              </div>
            </div>
            <div
              className="hotel-page-slider hidden"
              style={{ transition: "0.5s ease" }}
            >
              {map ? (
                <Map loc={currentHotel.coords} name={currentHotel.name} />
              ) : (
                <ImageSlider imgUrls={currentHotel.image} type={"hotel"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
