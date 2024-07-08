import Home from "./components/home-components/Home";
import About from "./components/other-components/Smart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-components/Header";
import Footer from "./components/header-components/Footer";
import Hotels from "./components/hotel-components/Hotels";
import Activity from "./components/activity-components/Activity";
import SinglePage from "./components/other-components/SinglePage";
import Restaurant from "./components/restaurant-components/Restaurant";
import SingleHotelPage from "./components/hotel-components/SingleHotelPage";
import Smart from "./components/other-components/Smart";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/project-city-website/" element={<Home />} />
        <Route path="/project-city-website/about" element={<About />} />
        <Route path="/project-city-website/hotel" element={<Hotels />} />
        <Route path="/project-city-website/hotel/:id" element={<SingleHotelPage />} />
        <Route path="/project-city-website/activity" element={<Activity />} />
        <Route path="/project-city-website/activity/:id" element={<SinglePage type={"activity"} />} />
        <Route path="/project-city-website/restaurant" element={<Restaurant />} />
        <Route path="/project-city-website/restaurant/:id" element={<SinglePage type={"restaurant"} />} />
        <Route path="/project-city-website/smart" element={<Smart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
