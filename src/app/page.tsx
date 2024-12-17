
// import styles from "./page.module.css";
"use client"
import Header from "@/components/Header/Header"
import Navbar from "@/components/Navbar/Navbar"
import SpellList from "@/components/SpellList/SpellList"
import Footer from "@/components/Footer/Footer"
// import logScreenSize from "@/utils/logScreenSize"

import {useEffect} from "react"

interface Window {
  orientation: number;
}

export function logViewportDimensions() {
  // Check if running in the browser (client-side)
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;

    const vw = width / 100;
    const vh = height / 100;

    console.log(`Viewport width: ${width}px`);
    console.log(`Viewport height: ${height}px`);
    console.log(`Viewport ratio: ${ratio.toFixed(2)}`);
    console.log(`1vw is: ${vw}px`);
    console.log(`1vh is: ${vh}px`);



  }
}
export default function Home() {

  useEffect(() => {
    // Ensure this runs only on the client (after the component mounts)
    logViewportDimensions(); // Initial log

    if (window.matchMedia("(orientation: landscape)").matches) {
      console.log("Landscape mode");
    } else if (window.matchMedia("(orientation: portrait)").matches) {
      console.log("Portrait mode");
    }

    const handleResize = () => {
      logViewportDimensions(); // Log on window resize
    };

    // Log on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    
  }, []); // 

  return (
    <div className="page">
      <Navbar className="page__nav" />
      <div className="page__scrollWrapper">
      <Header className="page__header"/>
     
      <main className="page__main">
      <SpellList />
      </main>
        <Footer className="page__footer" />
      </div>
    </div>
  );
}
