import React from 'react';
import { WeatherEveryHourItem } from './weatherEveryHourItem/weatherEveryHourItem';
import './weatherEveryHour.css';
import { connect } from 'react-redux';

const WeatherEveryHour = ({ listWeatherEveryHour }) => {
    
    return (
        <div className="wrapperThreeHoursItem">
            <div className="container">
                {
                    listWeatherEveryHour.map(({ main, weather, wind, visibility, pop, dt_txt}, index) => { 
                            return <WeatherEveryHourItem temp={main.temp} key={index} date={dt_txt} icon={weather[0].icon} pop={pop} windSpeed={wind.speed} />
                    
                    })
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listWeatherEveryHour: state.listWeatherEveryHour
    }
}

export default connect(mapStateToProps)(WeatherEveryHour);