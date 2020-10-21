import React from 'react';
import './weatherEveryDayItem.css';
import { setGroundLevel } from '../../weatherToday/additionInfo/setGroundLevel';
import { setPop } from '../../weatherToday/additionInfo/setPop';

export const WeatherEveryDayItem = ({ temp, date, icon, minTemp, maxTemp, windSpeed, grndLevel, pop }) => {
  return (
    <ul className="listEveryHoursItem listEveryDayItem">
      <li className="title">{date}</li>
      <li className="title"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />{Math.round(temp)}°С</li>
      <li className="title">{Math.round(minTemp)}°С...{Math.round(maxTemp)}°С</li>
      <li><img src="assets/icons/wind--v1.png" alt="wind" className="imgEveryThreeHoursItem" />{windSpeed.toFixed(2)} м/с</li>
      <li>Атм. давление: {setGroundLevel(grndLevel)} мм.рт.ст</li>
      <li>Вероятнсть осадков: {setPop(pop)}%</li>
    </ul>
  );
};