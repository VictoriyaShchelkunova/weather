import React from 'react';
import { WeatherEveryHourItem } from './weatherEveryHourItem/weatherEveryHourItem';
import './weatherEveryHour.css';
import { connect } from 'react-redux';

const WeatherEveryHour = ({ listWeatherEveryHour }) => {
  return (
    <div className="wrapperThreeHoursItem">
      <div className="container">
        {listWeatherEveryHour.map(({ main, weather, wind, pop, dt_txt }, index) => <WeatherEveryHourItem temp={main.temp} key={index} date={dt_txt} icon={weather[0].icon} pop={pop} windSpeed={wind.speed} />)}
      </div>
    </div>
  );
};
export default connect(mapStateToProps)(WeatherEveryHour);

function mapStateToProps(state) {
  return {
    listWeatherEveryHour: state.listWeatherEveryHour
  };
};

