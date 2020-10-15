import React, { useState } from 'react';


export default function App() {


    const [state, setState] = useState({
        count: 4, theme:
            'blue'
    });
    const count = state.count;
    const theme = state.theme;

    function incrementCount() {
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        });
    }
    function changeTheme() {
        setState(prevState => {
            return { ...prevState, theme: prevState.theme = 'red' }
        });
    }

    return (
        <>
            <h1>The current count is: {count}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={changeTheme}>-</button>
            <span>{count}</span>
            <span>{theme}</span>


        </>



    )
}
