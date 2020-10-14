import React, { useEffect } from "react";
import "./Main.css";
import { WeatherToday } from '../weatherToday/weatherToday';
import WeatherEveryThreeHours from '../weatherEveryThreeOurs/weatherEveryThreeHours';
import WeatherEveryDay from '../weatherEveryDay/weatherEveryDay';
import { connect } from 'react-redux';
import { saveListAction, getInfoWeatherTodayAction, getInfoWeatherEveryThreeHoursAction, getInfoWeatherEveryDayAction } from '../../actions';


const Main = ({ list, saveList, getInfoWeatherToday, listWeatherToday, getInfoWeatherEveryThreeHours, getInfoWeatherEveryDay }) => {
    useEffect(() => {
        (async function getList() {
            const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=13a0396ef8d525428ec55f2565a2c5e8');
            const list = await response.json();
            const listWeatherToday = list.list[0];
            const dateCurrentDay = new Date(listWeatherToday.dt_txt).getDate();
            const listWeatherEveryThreeHours = list.list.filter((weatherEveryThreeHours, index) => (index > 0 && index < 9));
            const listWeatherNextDay = list.list.filter(({ dt_txt }) => new Date(dt_txt).getDate() !== dateCurrentDay);
            const listWeatherEveryDay = [];
            for (let i = 0; i < listWeatherNextDay.length;) {
                listWeatherEveryDay.push(listWeatherNextDay.splice(i, 8))
            }
            listWeatherEveryDay.pop();
            getInfoWeatherEveryDay(listWeatherEveryDay);
            saveList(list);
            getInfoWeatherToday(listWeatherToday);
            getInfoWeatherEveryThreeHours(listWeatherEveryThreeHours);
            getInfoWeatherEveryDay(listWeatherEveryDay);
        })()
    }, [saveList, getInfoWeatherToday, getInfoWeatherEveryDay, getInfoWeatherEveryThreeHours]);
    if (!list.length || !listWeatherToday) {
        return (
            <span>Loading...</span>
        )
    }
    debugger
    return (
        <div className="main">
            <WeatherToday temp={listWeatherToday.main.temp} tempFeels={listWeatherToday.main.feels_like} minTemp={listWeatherToday.main.temp_min} maxTemp={listWeatherToday.main.temp_max} windSpeed={listWeatherToday.wind.speed} grndLevel={listWeatherToday.main.grnd_level} visibility={listWeatherToday.visibility} humidity={listWeatherToday.main.humidity} pop={listWeatherToday.pop} icon={listWeatherToday.weather[0].icon} />
            <WeatherEveryThreeHours />
            <WeatherEveryDay />
        </div>
    )

}

function mapStateToProps(state) {
    return {
        list: state.list,
        listWeatherToday: state.listWeatherToday,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        saveList: (list) => dispatch(saveListAction(list)),
        getInfoWeatherToday: (weatherTodayList) => dispatch(getInfoWeatherTodayAction(weatherTodayList)),
        getInfoWeatherEveryThreeHours: (weatherEveryThreeHoursList) => dispatch(getInfoWeatherEveryThreeHoursAction(weatherEveryThreeHoursList)),
        getInfoWeatherEveryDay: (weatherEveryDayList) => dispatch(getInfoWeatherEveryDayAction(weatherEveryDayList))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);