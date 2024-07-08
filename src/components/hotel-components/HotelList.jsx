import HotelListItem from "./HotelListItem";
import { NavLink } from "react-router-dom";

export default function HotelList({ data }) {

  return (
    <>
      <div className="hotel-list">
        {data.map((item) => {
          return (
            <NavLink to={`/hotel/${item.id}`} key={item.id}>
              <HotelListItem
                name={item.name}
                image={item.image}
                id={item.id}
                key={item.id}
              ></HotelListItem>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
