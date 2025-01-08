import './App.css';
import BottomNav from './components/BottomNav';
import Map from "./components/Map";

import { Route, Routes } from "react-router-dom";
import Chart from './components/Chart';
import Carousel from './components/Carousel';
import Calendar from './components/Calender';
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import PopupButton from './components/PopupButton ';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousal" element={<Carousel />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/map" element={<Map />} />

        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route
          path="/button"
          element={<PopupButton buttonText={"button"} popupContent ={"I Love Mom"}/>}
        />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
