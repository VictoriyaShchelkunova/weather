import { daysOfWeek } from '../../consts';

export const setListWeatherEveryDay = (listWeather) => {
  const dateCurrentDay = new Date().getDate();
  const listWeatherAllNextDay = listWeather.filter(({ dt_txt }) => new Date(dt_txt).getDate() !== dateCurrentDay);
  const listWeatherEveryDay = [];
  for (let i = 0; i < listWeatherAllNextDay.length;) {
    listWeatherEveryDay.push(listWeatherAllNextDay.splice(i, 8));
  };
  listWeatherEveryDay.pop();
  return listWeatherEveryDay.map((weatherNextDay) => {
    const minTemp = weatherNextDay.filter(({ dt_txt }) => dt_txt.slice(11, 13) === '00')[0].main.temp;
    const maxTemp = weatherNextDay.filter(({ dt_txt }) => dt_txt.slice(11, 13) === '12')[0].main.temp;
    const icon = weatherNextDay.filter(({ dt_txt }) => dt_txt.slice(11, 13) === '12')[0].weather[0].icon;
    const windSpeed = weatherNextDay.map(({ wind }) => wind.speed).reduce((prev, curr) => {
      prev = +prev;
      curr = +curr;
      return prev += curr;
    }, 0) / 8;
    const grndLevel = weatherNextDay.map(({ main }) => main.grnd_level).reduce((prev, curr) => {
      prev = +prev;
      curr = +curr;
      return prev += curr;
    }, 0) / 8;
    const pop = weatherNextDay.map(({ pop }) => pop).reduce((prev, curr) => {
      prev = +prev;
      curr = +curr;
      return prev += curr;
    }, 0) / 8;
    const temp = (minTemp + maxTemp) / 2;
    const dayOfWeek = new Date(weatherNextDay[0].dt_txt).getDay();
    const date = `${daysOfWeek[dayOfWeek]}, ${weatherNextDay[0].dt_txt.slice(8, 10)}.${weatherNextDay[0].dt_txt.slice(5, 7)}`;
    return { minTemp, maxTemp, icon, windSpeed, grndLevel, pop, temp, dayOfWeek, date };
  });
};