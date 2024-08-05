"use client";

import { useEffect, useState } from "react";
import "./page.css";
import bgImg1 from "../../public/2021-10-26-23-28-39-539.jpg";
import bgImg2 from "../../public/2021-10-26-23-30-09-348.jpg";
import bgImg3 from "../../public/bgImg3.jpeg";
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
        <h1>Hicham BOU AKL & Maria-Thala AL ASWAD</h1>
        <h2>LES ARCHITECTES WORKSHOP</h2>
        <p>Paris / rue Lecourbe, 75015</p>
        <p>Beyrouth / Rue Notre Dame de Saidanya, Moustaytbé</p>
      </div>
    </div>
  );
}
