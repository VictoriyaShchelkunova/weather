import React from 'react';
import './mainInfo.css';
import { connect } from 'react-redux';
import { setCelsius } from './setCelsius';


const MainInfo = ({ weatherNow, maxTempToday, minTempToday }) => {
    return (
        <div className="main-info">
            <ul>
                <li className="main-temp">{setCelsius(weatherNow.main.temp)}°С</li>
                <li>Ощущается как {setCelsius(weatherNow.main.feels_like)}°С</li>
                <li className="average-temp">{setCelsius(minTempToday)}°С...{setCelsius(maxTempToday)}°С</li>
                <li className="wind"><img src="assets/icons/wind.png" alt="icon wind" />{weatherNow.wind.speed} м/с</li>
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        weatherNow: state.weatherNow,
        maxTempToday: state.maxTempToday,
        minTempToday: state.minTempToday,
    }
}

export default connect(mapStateToProps)(MainInfo);

