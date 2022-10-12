import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from '../store/actions/home';

const Home = () => {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => {
        return state.home;
    });

    useEffect(() => {
        dispatch(fetchHomeData);
    }, []);

    console.log('homeData', homeData);
    const handleClick = () => {
        console.log('点击');
    }
    return (
        <div>
            首页
            <ul>
                {
                    homeData?.list?.map((da, index) => {
                        return (
                            <li key={index}>
                                <div>{da?.title}</div>
                                <div>{da?.content}</div>
                            </li>
                        );
                    })
                }
            </ul>
            <button onClick={handleClick}>
                按钮
            </button>
        </div>
    );
}

Home.getInitialData = async (store) => {
    return store.dispatch(fetchHomeData);
}
export default Home;
