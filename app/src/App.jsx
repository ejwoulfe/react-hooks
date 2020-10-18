import React, { useState } from 'react';
import './App.css';
import Banner from './components/banner';

export const ThemeContext = React.createContext();


function App() {

    const [darkTheme, setDarkTheme] = useState(false);


    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme)
    }



    return (
        <div id="app">
            <ThemeContext.Provider value={darkTheme}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Filler</li>
                        <button onClick={toggleTheme}>Change Theme</button>
                    </ul>
                </nav>
                <Banner />
            </ThemeContext.Provider>

        </div>

    );
}

export default App;
