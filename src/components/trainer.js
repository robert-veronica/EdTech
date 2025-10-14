import React from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import Trainer from './section-components/trainer';
import Footer from './global-components/footer';

const TrainerPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Trainer"  />
        <Trainer />
        <Footer />
    </div>
}

export default TrainerPage

