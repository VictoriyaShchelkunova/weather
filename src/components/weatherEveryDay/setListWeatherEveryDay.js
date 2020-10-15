export const setListWeatherEveryDay = (listWeather) => {
    const dateCurrentDay = new Date().getDate();
    const listWeatherAllNextDay = listWeather.filter(({ dt_txt }) => new Date(dt_txt).getDate() !== dateCurrentDay);
    const listWeatherEveryDay = [];
    for (let i = 0; i < listWeatherAllNextDay.length;) {
        listWeatherEveryDay.push(listWeatherAllNextDay.splice(i, 8))
    }
    listWeatherEveryDay.pop();
    return listWeatherEveryDay;
}