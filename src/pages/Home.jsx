import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroRedesigned';
import TrustBadges from '../components/TrustBadges';
import About from '../components/About';
import Statistics from '../components/Statistics';
import FeaturedProducts from '../components/FeaturedProducts';
import Reviews from '../components/Reviews';
import Videos from '../components/Videos';

const Home = () => {
    const location = useLocation();
    const lang = location.pathname.startsWith('/fr') ? 'fr' : 'ar';

    return (
        <>
            <HeroSection lang={lang} />
            <TrustBadges lang={lang} />
            <About lang={lang} />
            <Statistics lang={lang} />
            <FeaturedProducts lang={lang} />
            <Reviews lang={lang} />
            <Videos lang={lang} />
        </>
    );
};

export default Home;
