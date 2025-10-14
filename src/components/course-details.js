import React from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './global-components/footer';
import Testimonial from './section-components/testimonial-v4';
import Faq from './section-components/faq';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="E-Learning" />
        <CourseDetails />
        <Testimonial />
        <Faq />
        <Footer />
    </div>
}

export default AboutPage

