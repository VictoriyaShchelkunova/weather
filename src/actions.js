export const saveListAction = (list) => {
    return {
        type: 'SAVE_LIST',
        payload: list
    }
};

export const getInfoWeatherTodayAction = (weatherTodayList) => {
    debugger
    return {
        type: 'GET_LIST_WEATHER_TODAY',
        payload: weatherTodayList
    }
};

export const getInfoWeatherEveryThreeHoursAction = (weatherEveryThreeHoursList) => {
    return {
        type: 'GET_LIST_WEATHER_EVERY_THREE_HOURS',
        payload: weatherEveryThreeHoursList
    }
};

export const getInfoWeatherEveryDayAction = (weatherEveryDayList) => {
    return {
        type: 'GET_LIST_WEATHER_EVERY_DAY',
        payload: weatherEveryDayList
    }
};