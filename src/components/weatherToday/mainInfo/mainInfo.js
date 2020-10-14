import React from 'react';
import './mainInfo.css';



export const MainInfo = ({ list, temp, tempFeels, minTemp, maxTemp, windSpeed }) => {


    return (

        <div className="main-info">
            <ul>
                <li className="main-temp">{Math.trunc(temp - 273.15)}°С</li>
                <li>Ощущается как {Math.trunc(tempFeels - 273.15)}°С</li>
                <li className="average-temp">0°С...12°С</li>
                <li className="wind"><img src="assets/icons/wind.png" alt="icon wind" />{windSpeed} м/с</li>
            </ul>
        </div>
    )
}


