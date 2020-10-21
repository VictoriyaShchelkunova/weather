import React from 'react';
import { WeatherEveryDayItem } from './weatherEveryDayItem/weatherEveryDayItem';
import './weatherEveryDay.css';
import { connect } from 'react-redux';

const WeatherEveryDay = ({ listWeatherEveryDay }) => {
  if (!listWeatherEveryDay) {
    return <span>Loading...</span>;
  };
  return (
    <div className="wrapperEveryDayItem">
      <div className="container containerEveryDayItems">
        {listWeatherEveryDay.map((weatherNextDay, index) => <WeatherEveryDayItem key={index} temp={weatherNextDay.temp} date={weatherNextDay.date} icon={weatherNextDay.icon} minTemp={weatherNextDay.minTemp} maxTemp={weatherNextDay.maxTemp} windSpeed={weatherNextDay.windSpeed} grndLevel={weatherNextDay.grndLevel} pop={weatherNextDay.pop} />)}
      </div>
    </div>
  );
};
export default connect(mapStateToProps)(WeatherEveryDay);

function mapStateToProps(state) {
  return {
    listWeatherEveryDay: state.listWeatherEveryDay
  };
};