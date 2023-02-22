import { useState, useEffect } from "react";


// ----------------------------[ WINDOW DIMENSIONS FUNCTION ]----------------------------- //


/**
 * This function gets the window dimensions
 * @returns window dimensions (width, height)
*/

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}


/**
 * This is the function to export the window dimensions
 * @returns const windowDimensions
 */

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}