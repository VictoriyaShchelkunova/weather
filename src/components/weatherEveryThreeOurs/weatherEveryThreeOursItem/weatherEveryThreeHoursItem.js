import React from 'react';
import './weatherEveryThreeHoursItem.css';
export const WeatherEveryThreeHoursItem = ({ date, icon, pop, windSpeed }) => {
    return (
        <ul className="listEveryHoursItem">
            <li className="align"><strong>{date.slice(8, 10)}.{date.slice(5, 7)}, {date.slice(10, -3)}</strong></li>
            <li className="align"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />+10</li>
            <li className="little-text">Вероятность осадков: {Math.trunc(pop * 100)} %</li>
            <li className="little-text"><img src="assets/icons/wind--v1.png" alt="wind" className="imgEveryThreeHoursItem" />{windSpeed} м/с</li>
        </ul>
    )
}