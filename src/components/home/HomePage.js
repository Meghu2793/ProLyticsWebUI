import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};
const insideStyles = { background: 'white', padding: 10, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };
const image1 = "https://designmodo.com/wp-content/uploads/2013/08/MIO-Global.jpg";
const image2 = "https://designmodo.com/wp-content/uploads/2013/08/MIO-Global.jpg";
const image3 = "https://i.ytimg.com/vi/fvEBY1Zf70Y/maxresdefault.jpg";

//
const App = () => (
    <div style={styles}>
        <Parallax bgImage={image1}
            strength={500}>
            <div style={{ height: 700 }}>
                <div style={insideStyles} >ProLytics is a multiple sports analytics suite used to perform advanced statistical
analysis on professional and collegiate teams and athletes using machine learning and AI technologies.

</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>For coaches, this analytics suite will allow them to analyze the team’s performance, a single player’s performance, their opponent’s tendencies and other strategic insights. For scouts, this analytics suite will provide in-depth look into prospective players and extract insights using predictive analytics.</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={image2} strength={-100}>
            <div style={{ height: 700 }}>
                <div style={insideStyles}>Reverse direction</div>
            </div>
        </Parallax>
        <div style={{ height: 200 }}>
        </div>
        <h2>{'\u2728'}</h2>
    </div>
);

export default App;