import React from 'react';

const Home = () => {
    const handleClick = () => {
        console.log('点击');
    }
    return (
        <div>
            首页
            <button onClick={handleClick}>
                按钮
            </button>
        </div>
    );
}

export default Home;
