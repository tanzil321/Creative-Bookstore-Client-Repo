import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Sellings from '../Sellings/Sellings';

const Home = () => {
   

    return (
        <div className='mx-5'>
            <Hero></Hero>
            <Banner></Banner>
            <Sellings></Sellings>
        </div>
    );
};

export default Home;