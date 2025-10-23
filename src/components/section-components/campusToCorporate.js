// src/components/campusToCorporate.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/campusToCorporate.css';

class CampusToCorporate extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <div className="banner-area banner-area-4 bg-dark go-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-10">
                            <div className="thumb b-animate-thumb">
                                <img src={publicUrl + "assets/img/campus-to-corporate/banner.png"} alt="Campus to Corporate" />
                            </div>
                        </div>

                        <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                            <div className="banner-inner style-white text-center text-lg-left">
                                <h6 className="b-animate-1 banner-btn">CAMPUS TO CORPORATE</h6>
                                <h1 className="b-animate-2 title">
                                    Empowering students to transition from college to corporate with real-world skills
                                </h1>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CampusToCorporate;
