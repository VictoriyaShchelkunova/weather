import React, { useEffect } from "react";
import "./Main.css";
import { WeatherToday } from '../weatherToday/weatherToday';
import WeatherEveryHour from '../weatherEveryHour/weatherEveryHour';
import WeatherEveryDay from '../weatherEveryDay/weatherEveryDay';
import { connect } from 'react-redux';
import { saveListAction } from '../../actions';


const Main = ({ list, saveList, weatherNow }) => {
    useEffect(() => {
        saveList();
    }, [saveList])
    if (!list.length) {
        return (
            <span>Loading...</span>
        )
    }
    return (
        <div className="main">
            <WeatherToday icon={weatherNow.weather[0].icon} />
            <WeatherEveryHour />
            <WeatherEveryDay />
        </div>
    )
}
function mapStateToProps(state) {
    return {
        list: state.list,
        weatherNow: state.weatherNow,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        saveList: () => {
            dispatch(saveListAction)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);