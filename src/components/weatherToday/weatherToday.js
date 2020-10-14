import React from 'react';
import './weatherToday.css';
import  {MainInfo}  from './mainInfo/mainInfo';
import { AdditionInfo } from './additionInfo/additionInfo';
export const WeatherToday = ({temp, tempFeels, minTemp, maxTemp, windSpeed, grndLevel, visibility, pop, humidity, icon}) => {
    const headerBackgrounds = {
        '01d': 'clear-sky-day',
        '01n': 'clear-sky-night',
        '02d': 'few-clouds-day',
        '02n': 'few-clouds-night',
        '03d': 'scattered-clouds-day',
        '03n': 'scattered-clouds-night',
        '04d': 'broken-clouds-day',
        '04n': 'broken-clouds-night',
        '09d': 'shower-rain-day',
        '09n': 'shower-rain-night',
        '10d': 'rain-day',
        '10n': 'rain-night',
        '11d': 'thunderstorm-day',
        '11n': 'thunderstorm-night',
        '13d': 'snow-day',
        '13n': 'snow-night',
        '50d': 'mist-day',
        '50n': 'mist-night'
    }
    const date = new Date();
    let hours = date.getHours();
    if(hours < 10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    let dayOfWeek = date.getDay();
    const daysOfWeek = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."];
    let dayOfDate = date.getDate();
    const month = date.getMonth();
    const monthes = ["января", "феврля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    debugger
    return (
        <header  style={{
            backgroundImage: `url(assets/${headerBackgrounds[icon]}.jpg)`, 
        }}>
            <h2 >Погода в Миснке {hours}:{minutes} {daysOfWeek[dayOfWeek]}, {dayOfDate} {monthes[month]}</h2>
            <div className="wrapper">
            <MainInfo  temp={temp} tempFeels={tempFeels} minTemp={minTemp} maxTemp={maxTemp} windSpeed={windSpeed}/>
            <AdditionInfo  grndLevel={grndLevel} visibility={visibility} pop={pop} humidity={humidity}/>
            </div>            
        </header>
    )
}