import { setWeatherToday } from '../components/weatherToday/setWeatherToday';
import { setMaxMinTemperature } from '../components/weatherToday/setMaxMinTemperature';
import { setListWeatherEveryHour } from '../components/weatherEveryHour/setListWeatherEveryHour';
import { setListWeatherEveryDay } from '../components/weatherEveryDay/setListWeatherEveryDay';

const initialState = {
    list: [],
    weatherNow: null,
    listWeatherToday: [],
    listWeatherEveryDay: [],
    maxTempToday: 0,
    minTempToday: 0,
    listWeatherEveryHour: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LIST':
            return {
                ...state,
                list: action.payload,
                weatherNow: action.payload[0],
                listWeatherToday: setWeatherToday(action.payload, action.payload[0]),
                maxTempToday: setMaxMinTemperature(setWeatherToday(action.payload, action.payload[0])).maxTemp,
                minTempToday: setMaxMinTemperature(setWeatherToday(action.payload, action.payload[0])).minTemp,
                listWeatherEveryHour: setListWeatherEveryHour(setWeatherToday(action.payload, action.payload[0]), action.payload),
                listWeatherEveryDay: setListWeatherEveryDay(action.payload)
            }
        default:
            return state;
    }
}