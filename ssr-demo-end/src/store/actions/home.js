export const FETCH_HOME_DATA = 'fetch_home_data';

export const fetchHomeData = async (dispatch) => {
    const data = await  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                list: [
                    {
                        id: 1,
                        title: '标题1',
                        content: '内容1'
                    },
                    {
                        id: 2,
                        title: '标题2',
                        content: '内容2'
                    }
                ],
            })
        }, 2000);
    })
    dispatch({
        type: FETCH_HOME_DATA,
        payload: data,
    });
}
