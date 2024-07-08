import { NavLink } from "react-router-dom";

export default function SliderItem({ image, index, name, id, type }) {
  return (
    <>
        <div className="slider-item" data-index={index}>
      <NavLink to={`/${type}/${id}`}>
          <div
            id="slider-background"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
          <div className="slider-item-content">
            <img src={`${image}`} />
          </div>
          <h1>{name}</h1>
      </NavLink>
        </div>
    </>
  );
}
