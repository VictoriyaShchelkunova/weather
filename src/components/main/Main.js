import React, { useEffect } from "react";
import { WeatherToday } from '../weatherToday/weatherToday';
import WeatherEveryHour from '../weatherEveryHour/weatherEveryHour';
import WeatherEveryDay from '../weatherEveryDay/weatherEveryDay';
import { connect } from 'react-redux';
import { saveListAction } from '../../actions';
import "./Main.css";

const Main = ({ list, saveList, weatherNow }) => {
  useEffect(() => saveList(), [saveList]);
  if (!list.length) {
    return <span>Loading...</span>;
  };
  return (
    <div className="main">
      <WeatherToday icon={weatherNow.weather[0].icon} />
      <WeatherEveryHour />
      <WeatherEveryDay />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

function mapStateToProps(state) {
  return {
    list: state.list,
    weatherNow: state.weatherNow,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    saveList: () => {
      dispatch(saveListAction)
    }
  };
};