import React from 'react';
import Banner from '../components/Banner';
import States from '../components/States';
import TopApps from '../components/TopApps';

const Home = () => {
    return (
        <div>
            <Banner />
            <States />
            <TopApps/>
        </div>
    );
};

export default Home;