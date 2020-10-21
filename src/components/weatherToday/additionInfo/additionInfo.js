import React from 'react';
import './additionInfo.css';
import { connect } from 'react-redux';
import { setPop } from './setPop';
import { setGroundLevel } from './setGroundLevel'

const AdditionInfo = ({ weatherNow }) => {
  return (
    <ul className="addition-info">
      <li>Атмосферное давление: {setGroundLevel(weatherNow.main.grnd_level)} мм.рт.ст </li>
      <li>Видимость: {weatherNow.visibility} м</li>
      <li>Вероятность осадков: {setPop(weatherNow.pop)}%</li>
      <li>Влажность: {weatherNow.main.humidity}%</li>
    </ul>
  );
};
export default connect(mapStateToProps)(AdditionInfo);

function mapStateToProps(state) {
  return {
    weatherNow: state.weatherNow,
  };
};
