import React from 'react';
import { WeatherEveryThreeHoursItem } from './weatherEveryThreeOursItem/weatherEveryThreeHoursItem';
import './weatherEveryThreeHours.css';
import { connect } from 'react-redux';

const WeatherEveryThreeHours = ({ listWeatherEveryThreeHours }) => {
    
    return (
        <div className="wrapperThreeHoursItem">
            <div className="container">
                {
                    listWeatherEveryThreeHours.map(({ main, weather, wind, visibility, pop, dt_txt}, index) => { 
                            return <WeatherEveryThreeHoursItem temp={main.temp} key={index} date={dt_txt} icon={weather[0].icon} pop={pop} windSpeed={wind.speed} />
                    
                    })
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listWeatherEveryThreeHours: state.listWeatherEveryThreeHours
    }
}

export default connect(mapStateToProps)(WeatherEveryThreeHours);