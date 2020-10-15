export const saveListAction =  async (dispatch)  =>  {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=13a0396ef8d525428ec55f2565a2c5e8');
        const data = await response.json();
        const list = data.list;
        dispatch({type: 'SAVE_LIST', payload: list})
    }
