import { useEffect } from "react";
import "../../styles/Restaurant.css";
import revealAnimation from "../animation-effect/revealAnimation";
import { NavLink } from "react-router-dom";

export default function RestaurantItem({ item }) {
  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <div className="restaurant-item hidden">
        <div
          className="restaurant-item-image"
          style={{
            backgroundImage: `url(${item.pictures[0]})`,
          }}
        ></div>
        <div className="restaurant-item-content">
          <h2 className="roboto-bold">{item.name}</h2>
          <div className="address-container">
            <p>{item.address}</p>
            <p style={{ fontWeight: "800" }}>
              <span style={{ marginRight: "10px" }}>
                <i className="fa-solid fa-phone"></i>
              </span>
              {item.phone}
            </p>
            <a href={item.website} target="_blank">
              <span style={{ marginRight: "10px" }}>
                <i className="fa-solid fa-desktop"></i>
              </span>
              Website
            </a>
          </div>
        </div>
        <NavLink to={`/restaurant/${item.id}`} key={item.id}>
          <div className="restaurant-item-btn">
            <i className="fa-solid fa-plus"></i>
          </div>
        </NavLink>
      </div>
    </>
  );
}
