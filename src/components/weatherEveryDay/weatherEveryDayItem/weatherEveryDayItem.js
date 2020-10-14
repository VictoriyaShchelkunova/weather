import React from 'react';
import './weatherEveryDayItem.css';
export const WeatherEveryDayItem = ({ temp, date, icon, minTemp, maxTemp, windSpeed, grndLevel, pop }) => {
    return (
        <ul className="listEveryHoursItem listEveryDayItem">
            <li>{date}</li>
            <li><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />{Math.trunc(temp - 273.15)}°С</li>
            <li>{Math.trunc(minTemp - 273.15)}°С...{Math.trunc(maxTemp - 273.15)}°С</li>
            <li><img src="assets/icons/wind--v1.png" alt="wind" className="imgEveryThreeHoursItem" />{windSpeed.toFixed(2)} м/с</li>
            <li>Атм. давление: {Math.trunc(grndLevel / 1.333)} мм.рт.ст</li>
            <li>Вероятнсть осадков: {Math.trunc(pop * 100)}%</li>
        </ul>
    )
}