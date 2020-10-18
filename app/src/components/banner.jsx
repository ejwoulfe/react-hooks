import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import './banner.scss';
import { themeStyles } from '../theme'


function Banner() {

    const darkTheme = useContext(ThemeContext);


    return (
        <div style={themeStyles(darkTheme)} id="banner">
            <h1>Banner</h1>
            <p>This is the Banner Component</p>

        </div>

    );
}

export default Banner;
