import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {

    const [windowWith, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        // return is clean up
        // return is run first whenever this useEffect gets called
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);




    return (
        <div>
            {windowWith}
        </div>
    )


}