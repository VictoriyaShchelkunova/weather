import React from 'react';
import './weatherEveryHourItem.css';
import { setCelsius } from '../../weatherToday/mainInfo/setCelsius';
import { setPop } from '../../weatherToday/additionInfo/setPop';
export const WeatherEveryHourItem = ({ date, icon, pop, windSpeed, temp }) => {
    return (
        <ul className="listEveryHoursItem">
            <li className="align"><strong>{date.slice(8, 10)}.{date.slice(5, 7)}, {date.slice(10, -3)}</strong></li>
    <li className="align"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />{setCelsius(temp)}°С</li>
            <li className="little-text">Вероятность осадков: {setPop(pop)} %</li>
            <li className="little-text"><img src="assets/icons/wind--v1.png" alt="wind" className="imgEveryThreeHoursItem" />{windSpeed} м/с</li>
        </ul>
    )
}