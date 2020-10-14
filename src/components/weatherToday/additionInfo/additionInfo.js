import React from 'react';
import './additionInfo.css'
export const AdditionInfo = ({ grndLevel, visibility, pop, humidity }) => {
    return (
        <ul className="addition-info">
            <li>Атмосферное давление: {Math.trunc(grndLevel / 1.333)} мм.рт.ст </li>
            <li>Видимость:{visibility} м</li>
            <li>Вероятность осадков: {Math.trunc(pop * 100)}%</li>
            <li>Влажность: {humidity}%</li>
        </ul>
    )
}