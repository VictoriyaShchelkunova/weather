export const setListWeatherEveryHour = (listWeatherToday, list) => {
    const listWeatherTomorrow = [];
    const tomorrowDate = new Date().getDate() + 1;
    const listTomorrow = list.filter(({ dt_txt }) => new Date(dt_txt).getDate() === tomorrowDate);
    const currentHours = new Date().getHours();
    listTomorrow.forEach((weatherTomorrowItem) => {
        if (new Date(weatherTomorrowItem.dt_txt).getHours() <= currentHours) {
            listWeatherTomorrow.push(weatherTomorrowItem)
        };
    });

    const listEveryHourTodayResult = copyWeatherData(listWeatherToday).filter(({ dt_txt }) => new Date(dt_txt).getHours() > currentHours);
    const listEveryHourTomorrowResult = copyWeatherData(listWeatherTomorrow).filter(({ dt_txt }) => new Date(dt_txt).getHours() <= currentHours);

    function copyWeatherData(listWeather) {
        const listWeatherEveryHour = [];
        for (let i = 0; i < listWeather.length; i++) {
            let hours = new Date(listWeather[i].dt_txt).getHours();
            if (!(hours % 3)) {
                listWeatherEveryHour.push(listWeather[i]);
                hours += 1;
            }
            while (hours % 3) {
                if (hours < 10) {
                    hours = '0' + hours;
                }
                listWeatherEveryHour.push({ ...listWeather[i], dt_txt: `${listWeather[i].dt_txt.slice(0, 11)}${hours}:00:00` });
                hours = +hours + 1;
            }

        }
        return listWeatherEveryHour;
    }



    return [...listEveryHourTodayResult, ...listEveryHourTomorrowResult];
}