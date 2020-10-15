export const setMaxMinTemperature = (weatherList) => {
    const listTemperature = weatherList.map((weather) => weather.main.temp);
    const maxTemp = Math.max(...listTemperature);
    const minTemp = Math.min(...listTemperature);
    return {
        maxTemp,
        minTemp,
    }
}