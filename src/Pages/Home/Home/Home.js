import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';

const Home = () => {
   

    return (
        <div className='mx-5'>
            <Hero></Hero>
            <Banner></Banner>
        </div>
    );
};

export default Home;