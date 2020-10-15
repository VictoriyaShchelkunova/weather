export const setWeatherToday = (list, weatherNow) => {
    const todayDate = new Date(weatherNow.dt_txt).getDate();
    const listWeatherToday = list.filter(({ dt_txt }) => new Date(dt_txt).getDate() === todayDate);
    return listWeatherToday;
}


