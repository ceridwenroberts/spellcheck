'use client'
import { useEffect } from "react"

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

//Use in consumer function (eg Home)
export function ThisInConsumerComponent() {

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


    }, []); 
}
