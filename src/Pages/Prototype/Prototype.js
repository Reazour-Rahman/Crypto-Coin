import React from 'react';
import AboutAkacoin from '../Home/AboutAkacoin/AboutAkacoin';
import Akacoin from '../Home/Akacoin/Akacoin';
import Guide from '../Home/Guide/Guide';
import Hero from '../Home/HeroSection/Hero';
import Provides from '../Home/Provides/Provides';
import Wallets from '../Home/Wallets/Wallets';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Prototype = () => {
    return (
        <section className='prototype_container'>
            <Header/>
            <Hero/>
            <div className='container'>
            <Akacoin/>
            <Wallets/>
            <Guide/>
            <Provides/>
            </div>
            <AboutAkacoin/>
            <div className='container'>
            <Footer/>
            </div>
        </section>
    );
};

export default Prototype;