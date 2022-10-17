import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from 'react';
import { ResizeContext } from "./context/ResizeContext";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import World from './pages/Sections/World';
import USNews from "./pages/Sections/USNews";
import NYNews from "./pages/Sections/NYNews";
import Business from "./pages/Sections/Business";
import Opinion from "./pages/Sections/Opinion";
import Tech from "./pages/Sections/Tech";
import Sports from "./pages/Sections/Sports";
import Arts from "./pages/Sections/Arts";
import Books from "./pages/Sections/Books";
import Style from "./pages/Sections/Style";
import NavbarCompressed from "./components/NavbarCompressed/NavbarCompressed";
import Footer from "./components/Footer/Footer";
import Food from "./pages/Sections/Food";
import RealEstate from "./pages/Sections/RealEstate";

function App() {

  const sizeWindow = useContext(ResizeContext);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const date = new Date().toLocaleDateString('en-US', options);

  return <>
    <BrowserRouter>
      { sizeWindow.width > 1200 ? <Navbar date = {date} /> : <NavbarCompressed date = {date} />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/section/world/" element={<World />}/>
        <Route path="/section/us/" element={<USNews />}/>
        <Route path="/section/nynews/" element={<NYNews />}/>
        <Route path="/section/business/" element={<Business />}/>
        <Route path="/section/opinion/" element={<Opinion />}/>
        <Route path="/section/tech/" element={<Tech />}/>
        <Route path="/section/sports/" element={<Sports />}/>
        <Route path="/section/arts/" element={<Arts />}/>
        <Route path="/section/books/" element={<Books />}/>
        <Route path="/section/style/" element={<Style />}/>
        <Route path="/section/food/" element={<Food />}/>
        <Route path="/section/realestate/" element={<RealEstate />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;