import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area pd-top-100 pd-bottom-100" style={{backgroundImage: 'url("'+publicUrl+'assets/img/bg/2.png")'}}>
			  <div className="container">
			    <div className="about-area-inner">
			      <div className="row">
			        <div className="col-lg-6 order-lg-12 align-self-center">
			          <img src={publicUrl+"assets/img/about/4.png"} alt="img" />
			        </div>
			        <div className="col-lg-6 order-lg-1 align-self-center mt-4 mt-lg-0">
			          <div className="about-inner-wrap">  
			            <div className="section-title mb-0">
			              <h6 className="sub-title style-btn">ABOUT US</h6>
			              <h2 className="title">1230+ Courses Online from Best Tutors</h2>
			              <p className="content">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV4