export const FETCH_PERSONAL_DATA = 'fetch_home_data';

export const fetchPersonalData = async (dispatch) => {
    const data = await  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                info: {
                    userId: 111,
                    userName: '痊愈',
                    gender: '男',
                    age: 29,
                },
            })
        }, 2000);
    })
    dispatch({
        type: FETCH_PERSONAL_DATA,
        payload: data,
    });
}
