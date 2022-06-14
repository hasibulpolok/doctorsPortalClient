import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoientmentBanner from '../AppointmentBanner/AppoientmentBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <AppoientmentBanner></AppoientmentBanner>
        </div>
    );
};

export default Home;