import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class AboutV5 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="about-area pd-top-80">
			<div className="container">
				<div className="about-area-inner">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<img src={publicUrl + "assets/img/about/5.png"} alt="img" />
						</div>
						<div className="col-lg-6 align-self-center">
							<div className="about-inner-wrap">
								<div className="section-title mb-0">
									<h6 className="sub-title style-btn">ABOUT US</h6>
									<h2 className="title">Why Choose Us</h2>
									<p className="content">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad</p>
									<div className="row">


										<div className="col-lg-6">
											<ul className="single-list-wrap">
												<li className="single-list-inner style-check-box">
													<div className="media">
														<div className="media-left">
															<i className="fa fa-check" />
														</div>
														<div className="media-body">
															<h5>Comprehensive Technical Training</h5>
															<p>Learn MERN Stack, Flutter, Data Science, and Machine Learning from beginner to advanced levels through live projects and dedicated doubt-solving sessions.</p>
														</div>
													</div>
												</li>
											</ul>
										</div>


										<div className="col-lg-6">
											<ul className="single-list-wrap">
												<li className="single-list-inner style-check-box">
													<div className="media">
														<div className="media-left">
															<i className="fa fa-check" />
														</div>
														<div className="media-body">
															<h5>Career Guidance & Mentorship</h5>
															<p>24/7 chatbot support and personalized mentorship address technical and career queries, while guidance for higher studies, scholarships, and interview prep ensures students are placement-ready.</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default AboutV5