import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchPersonalData } from '../store/actions/personal';

const Personal = () => {
    const dispatch = useDispatch();
    const personalState = useSelector((state) => state.personal);
    console.log('personalState', personalState);
    useEffect(() => {
        dispatch(fetchPersonalData);
    }, []);
    return (
        <div>
            <h1>个人中心页</h1>
            <div>
                <div>姓名：{personalState?.info?.userName}</div>
                <div>性别：{personalState?.info?.gender}</div>
                <div>年龄：{personalState?.info?.age}</div>
            </div>
        </div>
    );
}

export default Personal;
