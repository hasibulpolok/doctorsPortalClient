import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoientmentBanner from '../AppointmentBanner/AppoientmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppoientmentBanner></AppoientmentBanner>
        </div>
    );
};

export default Home;