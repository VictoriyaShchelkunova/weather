const initialState = {
    list: [],
    listWeatherToday: null,
    listWeatherEveryThreeHours: [],
    listWeatherEveryDay: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LIST':
            return {
                ...state,
                list: action.payload.list,
            }
        case 'GET_LIST_WEATHER_TODAY':
            debugger
            return {
                ...state,
                listWeatherToday: action.payload
            }
        case 'GET_LIST_WEATHER_EVERY_THREE_HOURS':
            debugger
            return {
                ...state,
                listWeatherEveryThreeHours: action.payload
            }
        case 'GET_LIST_WEATHER_EVERY_DAY':
            debugger
            return {
                ...state,
                listWeatherEveryDay: action.payload
            }
        default:
            return state;
    }

}