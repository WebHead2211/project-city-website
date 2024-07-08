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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/hotel/:id" element={<SingleHotelPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity/:id" element={<SinglePage type={"activity"} />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:id" element={<SinglePage type={"restaurant"} />} />
        <Route path="/smart" element={<Smart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
