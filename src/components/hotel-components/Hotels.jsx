import Navigation from "../other-components/Navigation";
import PageTop from "../other-components/PageTop";
import Slider from "../other-components/Slider";
import "../../styles/Hotels.css";
import PageTopImages from "../other-components/PageTopImages";
import { useState, useEffect } from "react";
import HotelList from "./HotelList";
import { dataArray } from "../../data/hotels";
import Featured from "../other-components/Featured";
import ImageSlider from "../other-components/ImageSlider";
import PageDesc from "../other-components/PageDesc";
import revealAnimation from "../animation-effect/revealAnimation";

let featuredArray = [];

dataArray.forEach((item) => {
  if (item.rating === 5) {
    featuredArray.push({
      name: item.name,
      rating: item.rating,
      price: item.price,
      coords: item.coords,
      id: item.id,
      image: item.image[0],
    });
  }
});

export default function Hotels() {
  const [list, setList] = useState("all");
  const [listData, setListData] = useState([]);
  const [order, setOrder] = useState("asc");

  const makeList = (list) => {
    let listArray = [];
    if (list == "all") {
      dataArray.forEach((item) => {
        listArray.push(item);
      });
    } else {
      dataArray.forEach((item) => {
        if (item.rating == list) {
          listArray.push(item);
        }
      });
    }
    setListData(listArray);
    sortList();
  };

  function compareAsc(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function compareDes(a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  }

  function priceAsc(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  function priceDes(a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }

  const sortList = () => {
    if (order == "asc") {
      setListData((wasData) => {
        return wasData.sort(compareAsc);
      });
    } else if (order == "des") {
      setListData((wasData) => {
        return wasData.sort(compareDes);
      });
    } else if (order == "priceasc") {
      setListData((wasData) => {
        return wasData.sort(priceAsc);
      });
    } else if (order == "pricedes") {
      setListData((wasData) => {
        return wasData.sort(priceDes);
      });
    }
  };

  function filterClick(e, query) {
    let h2List = document.querySelectorAll(".filter-title");
    let starList = document.querySelectorAll("i");
    h2List.forEach((item) => item.classList.remove("active"));
    starList.forEach((star) => star.classList.remove("active"));
    e.target.classList.add("active");
    if (e.target.previousSibling) {
      e.target.previousSibling.classList.add("active");
    }
    setList(query);
  }

  const hotelGrow = [{ transform: "scale(0)" }, { transform: "scale(1)" }];

  const hotelGrowTiming = {
    duration: 500,
    iterations: 1,
    easing: "ease",
  };

  useEffect(() => {
    makeList(list);
  }, [list, order]);

  useEffect(() => {
    const hotels = document.querySelectorAll(".hotel-list-item");
    hotels.forEach((item) => {
      item.animate(hotelGrow, hotelGrowTiming);
    });
  }, [listData]);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <>
      <PageTop
        title={"Best Hotels"}
        subTitle={"Stay, Explore, Unwind"}
        id={"page-top-container"}
      >
        <img
          src="./images/hotels/hotels-1.jpg"
          alt="Mumbai"
          className="home-image"
        />
        <img
          src="./images/hotels/hotels-2.jpg"
          alt="Mumbai"
          className="home-image"
        />
      </PageTop>
      <Navigation>{["home", "hotels"]}</Navigation>
      <PageDesc
        title="Where To Stay"
        text="Mumbai hotels offer a range of accommodations, from luxurious sea-view resorts to budget-friendly options, all known for exceptional hospitality and convenience."
      />
      <Featured title={"Featured Stays"} image={"./images/hotels/hotel-bg.jpg"}>
        {/* <Slider arr={featuredArray} type="hotels" /> */}
        <div
          id="featured-slider"
          className="hidden"
          style={{ transition: "0.5s ease" }}
        >
          <ImageSlider featured={true} imgUrls={featuredArray} type={"hotel"} />
        </div>
      </Featured>
      <div className="hidden" style={{ transition: "0.5s ease" }}>
        <h1 className="mid-page-heading merriweather-bold">All Hotels</h1>
      </div>
      <div id="hotel-list-container">
        <div className="filter-sort-container">
          <div className="filter-container">
            <h2
              className="filter-title active"
              onClick={(e) => {
                filterClick(e, "all");
              }}
            >
              All
            </h2>
            <div>
              <i className="fa-solid fa-star gold"></i>
              <h2
                className="filter-title"
                onClick={(e) => {
                  filterClick(e, 5);
                }}
              >
                5 Stars
              </h2>
            </div>
            <div>
              <i className="fa-solid fa-star silver"></i>
              <h2
                className="filter-title"
                onClick={(e) => {
                  filterClick(e, 4);
                }}
              >
                4 Stars
              </h2>
            </div>

            <div>
              <i className="fa-solid fa-star bronze"></i>
              <h2
                className="filter-title"
                onClick={(e) => {
                  filterClick(e, 3);
                }}
              >
                3 Stars
              </h2>
            </div>
          </div>
          <div id="sort-container">
            <select
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            >
              <option value="asc">Ascending</option>
              <option value="des">Descending</option>
              <option value="pricedes">{`Price (High to Low)`}</option>
              <option value="priceasc">{`Price (Low to High)`}</option>
            </select>
          </div>
        </div>
        <HotelList data={listData} />
      </div>
      <div
        style={{
          height: "10vh",
          width: "100vw",
          backgroundColor: "var(--blue-primary)",
        }}
      ></div>
    </>
  );
}
