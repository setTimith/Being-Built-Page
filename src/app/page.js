"use client";

import { useEffect, useState } from "react";
import "./page.css";
import bgImg1 from "../../public/bgimg1.jpg";
import bgImg2 from "../../public/bgimg2.jpg";
import bgImg3 from "../../public/bgimg3.jpeg";
import bgImg4 from "../../public/bgimg4.png";

const images = [bgImg1, bgImg2, bgImg3, bgImg4];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    // Retrieve the stored index from localStorage
    const storedIndex = localStorage.getItem("bgImageIndex");
    let initialIndex;

    if (storedIndex === null) {
      // Choose a random index on first load
      initialIndex = Math.floor(Math.random() * images.length);
    } else {
      // Use the stored index on subsequent loads
      initialIndex = parseInt(storedIndex, 10);
    }

    setBgIndex(initialIndex);

    // Calculate the next index to store
    const nextIndex = (initialIndex + 1) % images.length;
    localStorage.setItem("bgImageIndex", nextIndex);
  }, []);

  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${images[bgIndex].src})`,
      }}
    >
      {/* <div className="shader"></div> */}
      <div className="contentDiv">
        <h1>
          Hicham BOU AKL & <br /> Maria-Thala AL ASWAD
        </h1>
        <h2>LES ARCHITECTES WORKSHOP</h2>
        <p>Paris / rue Lecourbe, 75015</p>
        <p>Beyrouth / rue N.D. de Saidnaya, Moustaytbé</p>
      </div>
    </div>
  );
}
