import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from 'react';
import { ResizeContext } from "./context/ResizeContext";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import NavbarCompressed from "./components/NavbarCompressed";

function App() {

  const sizeWindow = useContext(ResizeContext);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const date = new Date().toLocaleDateString('en-US', options);

  return <>
    <BrowserRouter>
      { sizeWindow.width > 1200 ? <Navbar date = {date} /> : <NavbarCompressed date = {date} />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;