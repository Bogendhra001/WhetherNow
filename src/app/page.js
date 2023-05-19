"use client";

import { useState } from 'react';
import HomePage from './pages/homepage/homepage';
import backgroundData from "@/app/data.json";
import general from '@/app/general.json';

export default function Home() {

  // const [background, setBackground] = useState("");
  const getBackground = (code) => {
    // console.log(code);
    const newCode = general[String(code)][0];
    // console.log(general[code]);
    console.log(backgroundData[newCode]);
    const randInt = Math.round(Math.random() * (backgroundData[newCode].length - 1));
    console.log(randInt);
    // console.log(randInt);
    // setBackground();
    document.body.style.backgroundImage = `url(/backgrounds/${backgroundData[newCode][randInt]})`;
  }

  return (
    <main className='main'>
      <nav className='navbar'>
        <div className='logo'>Weather Now</div>
      </nav>
      {/* GUYS, WORK IN HOMEPAGE.JS IN PAGES DIRECTORY ONLY FOR NOW */}
      <HomePage setWeatherCode={getBackground}></HomePage>
    </main>
  )
}
