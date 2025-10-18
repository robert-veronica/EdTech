import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class AboutV4 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="about-area pd-top-100 pd-bottom-100" style={{ backgroundImage: 'url("' + publicUrl + 'assets/img/bg/2.png")' }}>
			<div className="container">
				<div className="about-area-inner">
					<div className="row">
						<div className="col-lg-6 order-lg-12 align-self-center">
							<img src={publicUrl + "assets/img/about/4.png"} alt="img" />
						</div>
						<div className="col-lg-6 order-lg-1 align-self-center mt-4 mt-lg-0">
							<div className="about-inner-wrap">
								<div className="section-title mb-0">
									<h6 className="sub-title style-btn">Quick Insight</h6>
									<h2 className="title">One Stop Shop For</h2>
									<p className="content">From technical mastery to <b>mentorship</b>, soft skills, <b> internships</b>, and industry exposure, everything a student needs to succeed is included under one umbrella. This holistic approach makes it the ultimate one-stop-shop for colleges and students looking to achieve their career goals with confidence.</p>
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