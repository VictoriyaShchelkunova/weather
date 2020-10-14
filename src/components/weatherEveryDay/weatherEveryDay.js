import React from 'react';
import { WeatherEveryDayItem } from './weatherEveryDayItem/weatherEveryDayItem';
import './weatherEveryDay.css';
import { connect } from 'react-redux';

const WeatherEveryDay = ({ listWeatherEveryDay }) => {
    debugger
    if (!listWeatherEveryDay) {
        return (
            <span>Loading...</span>
        )
    }
    return (
        <div className="wrapperEveryDayItem">
            <div className="container containerEveryDayItems">
                {
                    listWeatherEveryDay.map((weatherNextDay) => {
                        debugger
                        const minTemp = weatherNextDay.filter(({dt_txt}) => dt_txt.slice(11, 13) === '00')[0].main.temp;
                        const maxTemp = weatherNextDay.filter(({dt_txt}) => dt_txt.slice(11, 13) === '12')[0].main.temp;
                        const icon = weatherNextDay.filter(({dt_txt}) => dt_txt.slice(11, 13) === '12')[0].weather[0].icon;
                        debugger
                        const windSpeed = weatherNextDay.map(({wind}) => wind.speed).reduce((prev, curr) => {
                            prev = +prev;
                            curr = +curr;
                            return prev += curr;
                        }, 0) / 8;
                        const grndLevel = weatherNextDay.map(({main}) => main.grnd_level).reduce((prev, curr) => {
                            prev = +prev;
                            curr = +curr;
                            return prev += curr;
                        }, 0) / 8;
                        const pop = weatherNextDay.map(({pop}) => pop).reduce((prev, curr) => {
                            prev = +prev;
                            curr = +curr;
                            return prev += curr;
                        }, 0) / 8;
                        const temp = (minTemp + maxTemp) /2;
                        const dayOfWeek = new Date(weatherNextDay[0].dt_txt).getDay();
                        const daysOfWeek = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."];
                        const date = `${daysOfWeek[dayOfWeek]}, ${weatherNextDay[0].dt_txt.slice(8, 10)}.${weatherNextDay[0].dt_txt.slice(5, 7)}`;
                        return (
                            <WeatherEveryDayItem temp={temp} date={date} icon={icon} minTemp={minTemp} maxTemp={maxTemp} windSpeed={windSpeed} grndLevel={grndLevel} pop={pop}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listWeatherEveryDay: state.listWeatherEveryDay
    }
}

export default connect(mapStateToProps)(WeatherEveryDay);