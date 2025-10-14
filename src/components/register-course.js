import React from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import RegisterCoursePage from './section-components/registerCoursePage';

const RegisterCourse = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Register for Course" />
        <RegisterCoursePage />
        <Footer />
    </div>
}

export default RegisterCourse

