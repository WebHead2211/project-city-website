import { useEffect } from "react";
import revealAnimation from "../animation-effect/revealAnimation";
import { dataArray } from "../../data/hotels";

export default function HotelListItem({
  name = "Hotel Name",
  image = "images/hotels/hotels-1.jpg",
  id,
}) {


  let currentHotel;
  dataArray.forEach((item) => {
    if(item.id === id) {
      currentHotel = {...item};  
    }
  })

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <div
        className="hotel-list-item hidden"
        style={{ backgroundImage: `url(${currentHotel.image[0]})`, transition: "0.5s ease"  }}
      >
        <div className="blur"></div>
        <h1>{name}</h1>
      </div>
    </>
  );
}
