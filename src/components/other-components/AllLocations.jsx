import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { NavLink } from "react-router-dom";
import "../../styles/AllLocations.css";
import { useEffect, useState } from "react";

let marker = false;
let iconList;

export default function AllLocations({ data, selected }) {
  function makeMarker() {
    iconList.forEach((icon) => {
      // icon.classList.remove("active-icon");
      // icon.classList.add("inactive-icon");
      // if (icon.style.opacity === selected) {
      //   icon.classList.remove("inactive-icon");
      //   icon.classList.add("active-icon");
      // }
      icon.classList.add("active-icon");
    });
  }

  useEffect(() => {
    setTimeout(() => {
      iconList = document.querySelectorAll(".leaflet-marker-pane > img");
      makeMarker();
    }, 3000);
  }, []);

  useEffect(() => {
    iconList = document.querySelectorAll(".leaflet-marker-pane > img");
    makeMarker();
  }, [selected]);

  return (
    <>
      <div className="map-locations">
        <MapContainer
          center={[19.04, 72.8777]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((item, index) => {
            {
              if(item.type !== selected) return;
            }
            return (
              <Marker
                // opacity={item.geoCode ? 0.99 : item.coords ? 0.98 : 0.97}
                position={
                  item.geoCode
                    ? [item.geoCode.latitude, item.geoCode.longitude]
                    : item.coords
                    ? item.coords
                    : item.location
                }
              >
                <Popup>
                  <NavLink
                    to={`/${selected}/${item.id}`}
                    key={`link-${item.id}`}
                  >
                    {item.name}
                  </NavLink>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </>
  );
}
