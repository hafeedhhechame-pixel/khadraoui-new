import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Statistics from '../components/Statistics';
import FeaturedProducts from '../components/FeaturedProducts';
import Videos from '../components/Videos';
import Reviews from '../components/Reviews';
import TrustBadges from '../components/TrustBadges';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustBadges />
            <About />
            <Statistics />
            <FeaturedProducts />
            <Reviews />
            <Videos />
        </>
    );
};

export default Home;
