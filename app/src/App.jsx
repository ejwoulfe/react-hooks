import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComnponent';

export const ThemeContext = React.createContext();

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        // Need a Provider and consumer. Provider wraps the components that want to inherit the value, in this case darkTheme.
        // On button push it will toggle true or false for darkTheme. The child components will then decide which style based on the boolean.
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}> Toggle Theme </button>
                <FunctionContextComponent></FunctionContextComponent>
                <ClassContextComponent></ClassContextComponent>
            </ThemeContext.Provider>
        </>

    )
}
