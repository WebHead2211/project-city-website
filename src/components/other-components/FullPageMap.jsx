import "../../styles/FullPageMap.css";
import Map from "./Map";

export default function FullPageMap({ close, location, name }) {
  return (
    <>
      <div className="map-full-page">
        <Map loc={location} name={name} scroll={true} />
        <button onClick={close} className="map-close-btn">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </>
  );
}
