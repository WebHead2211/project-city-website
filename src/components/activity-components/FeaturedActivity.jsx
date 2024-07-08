import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import revealAnimation from "../animation-effect/revealAnimation";

export default function FeaturedActivity({ activity }) {
  const [loc, setLoc] = useState([
    activity.geoCode.latitude,
    activity.geoCode.longitude,
  ]);
  let activityImageArray;
  let imageArray = [...activity.pictures];
  let currentIndex = 0;
  let map = (
    <MapContainer center={loc} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={loc}>
        <Popup>{activity.name}</Popup>
      </Marker>
    </MapContainer>
  );

  setInterval(() => {
    // if (document.documentElement.scrollTop > 500) return;
    // if(!gallery) return;

    if (activityImageArray) {
      activityImageArray.forEach((image) => {
        image.classList.remove("active");
      });
      activityImageArray[currentIndex].classList.add("active");
      if (currentIndex < activityImageArray.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }
  }, 3000);

  useEffect(() => {
    activityImageArray = document.querySelectorAll(".activity-image");
    setLoc([activity.geoCode.latitude, activity.geoCode.longitude]);
  }, [activity]);

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <div className="activity-map hidden" style={{ transition: "0.5s ease" }}>{map}</div>
      <div className="activity-image-container hidden" style={{ transition: "0.5s ease" }}>
        {imageArray.map((item, index) => {
          let active = "";
          if (index == 0) {
            active = "active";
          }
          return (
            <img src={item} className={`activity-image ${active}`} key={item} />
          );
        })}
      </div>
    </>
  );
}
