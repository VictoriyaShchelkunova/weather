import React from 'react';
import './mainInfo.css';
import { connect } from 'react-redux';

const MainInfo = ({ weatherNow, maxTempToday, minTempToday }) => {
  return (
    <div className="main-info">
      <ul>
        <li className="main-temp">{Math.round(weatherNow.main.temp)}°С</li>
        <li>Ощущается как {Math.round(weatherNow.main.feels_like)}°С</li>
        <li className="average-temp">{Math.round(minTempToday)}°С...{Math.round(maxTempToday)}°С</li>
        <li className="wind"><img src="assets/icons/wind.png" alt="icon wind" />{weatherNow.wind.speed} м/с</li>
      </ul>
    </div>
  );
};
export default connect(mapStateToProps)(MainInfo);

function mapStateToProps(state) {
  return {
    weatherNow: state.weatherNow,
    maxTempToday: state.maxTempToday,
    minTempToday: state.minTempToday,
  };
};



