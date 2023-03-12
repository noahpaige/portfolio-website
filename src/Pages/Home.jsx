import { useState } from "react";
import "../App.css";
import Splash from "../Components/Splash";
import Work from "../Components/Work";
import About from "../Components/About";
import MyFooter from "../Components/Footer";

//todo:
// - create 'screen' component that occupies a full screen

export default function App() {
  return (
    <div className="overflow-scroll">
      <div className="snap-mandatory snap-y overflow-scroll h-screen bg-base-200">
        <div className="snap-center h-screen w-screen">
          <Splash />
        </div>
        <div className="snap-center h-screen w-screen">
          <Work />
        </div>
        <div className="snap-center h-screen w-screen">
          <About />
        </div>
        <div className="snap-center h-screen w-screen">About</div>
        <MyFooter />
      </div>
    </div>
  );
}
