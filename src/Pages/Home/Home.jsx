import React from 'react';
import Banner from '../../Components/banner/Banner';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';
import AppsBanner from '../../Components/AppsBanner/AppsBanner';
import TrendingApps from '../Apps/TrendingApps';
import Review from '../../Components/Review/Review';

const Home = () => {
    const data = useLoaderData();
    //console.log(data)

    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <AppsBanner></AppsBanner>
            <TrendingApps data={data}></TrendingApps>
            {/* <Apps data={data}></Apps> */}
        </div>
    );
};

export default Home;