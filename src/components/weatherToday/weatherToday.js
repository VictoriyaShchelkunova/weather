import React from 'react';
import './weatherToday.css';
import MainInfo from './mainInfo/mainInfo';
import AdditionInfo from './additionInfo/additionInfo';
import { headerBackgrounds, hours, minutes, dayOfWeek, dayOfDate, month } from '../../consts';

export const WeatherToday = ({ icon }) => {
  return (
    <header style={{backgroundImage: `url(assets/${headerBackgrounds[icon]}.jpg)`}}>
      <h2 >Погода в Миснке {hours()}:{minutes()} {dayOfWeek()}, {dayOfDate()} {month()}</h2>
      <div className="wrapper">
        <MainInfo />
        <AdditionInfo />
      </div>
    </header>
  );
};