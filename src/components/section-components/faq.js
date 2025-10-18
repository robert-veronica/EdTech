import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Faq extends Component {

	render() {

		// let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="faq-area pd-top-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="about-area-inner">
							<div className="section-title mb-0">
								<h2 className="title mt-0">FAQs</h2>
								<p className="content">We are available 24/7 to help you solve your doubts. You can use our live chatbot for instant answers, reach out via email, or directly connect with a mentor or trainer for personalized guidance whenever you need it.</p>
								<div className="row">

									<div className="col-sm-6">
										<ul className="single-list-wrap">
											<li className="single-list-inner style-check-box bg-light-green p-3 b-radius-5">
												<div className="media">
													<div className="media-left mr-0">
														<i className="fa fa-check" />
													</div>
													<div className="media-body">
														<h5>128+</h5>
														<p>Hours Of Technical Training</p>
													</div>
												</div>
											</li>
										</ul>
									</div>

									<div className="col-sm-6">
										<ul className="single-list-wrap">
											<li className="single-list-inner style-check-box bg-light-green p-3 b-radius-5">

												<div className="media">
													<div className="media-left mr-0">
														<i className="fa fa-check" />
													</div>
													<div className="media-body">
														<h5>25</h5>
														<p>Mentors</p>
													</div>
												</div>
											</li>
										</ul>
									</div>

									<div className="col-sm-6">
										<ul className="single-list-wrap">
											<li className="single-list-inner style-check-box bg-light-green p-3 b-radius-5">

												<div className="media">
													<div className="media-left mr-0">
														<i className="fa fa-check" />
													</div>
													<div className="media-body">
														<h5>32+</h5>
														<p>Workshops</p>
													</div>
												</div>
											</li>
										</ul>
									</div>

									<div className="col-sm-6">
										<ul className="single-list-wrap">
											<li className="single-list-inner style-check-box bg-light-green p-3 b-radius-5">

												<div className="media">
													<div className="media-left mr-0">
														<i className="fa fa-check" />
													</div>
													<div className="media-body">
														<h5>10</h5>
														<p>Tech Savy Trainers</p>
													</div>
												</div>
											</li>
										</ul>
									</div>


								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-7 mt-5 mt-lg-0">
						<div id="accordion" className="accordion-area">
							<div className="card single-faq-inner">
								<div className="card-header" id="ff-one">
									<h5 className="mb-0">
										<button className="btn-link" data-toggle="collapse" data-target="#f-one" aria-expanded="true" aria-controls="f-one">
											01.  Who can we apply for the live program and are there any prerequisites?
											<i className="fa fa-eye" />
										</button>
									</h5>
								</div>
								<div id="f-one" className="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
									<div className="card-body">
										Students studing in BCA, MCA, Diploma Courses, Degree Courses, etc. who are interested in learning MERN stack are welcome. There is no prerequisites for this course.
									</div>
								</div>
							</div>
							<div className="card single-faq-inner">
								<div className="card-header" id="ff-two">
									<h5 className="mb-0">
										<button className="btn-link collapsed" data-toggle="collapse" data-target="#f-two" aria-expanded="true" aria-controls="f-two">
											02.  What is mode of payment?
											<i className="fa fa-eye" />
										</button>
									</h5>
								</div>
								<div id="f-two" className="collapse" aria-labelledby="ff-two" data-parent="#accordion">
									<div className="card-body">
										We accept payment though UPI, G-pay, Paytm, bank transfer , NEFT etc
									</div>
								</div>
							</div>
							<div className="card single-faq-inner">
								<div className="card-header" id="ff-three">
									<h5 className="mb-0">
										<button className="btn-link collapsed" data-toggle="collapse" data-target="#f-three" aria-expanded="true" aria-controls="f-three">
											03.  Is there EMI option available?
											<i className="fa fa-eye" />
										</button>
									</h5>
								</div>
								<div id="f-three" className="collapse" aria-labelledby="ff-three" data-parent="#accordion">
									<div className="card-body">
										Yes, we are providing a 6 Month EMI option.
									</div>
								</div>
							</div>
							<div className="card single-faq-inner">
								<div className="card-header" id="ff-four">
									<h5 className="mb-0">
										<button className="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
											04.  I have completed my course ! Now what ??
											<i className="fa fa-eye" />
										</button>
									</h5>
								</div>
								<div id="f-four" className="collapse" aria-labelledby="ff-four" data-parent="#accordion">
									<div className="card-body">
										We provide paid internship Opportunities in Rebert Technologies Pvt. Ltd. having a proper designation.
									</div>
								</div>
							</div>

							<div className="card single-faq-inner">
								<div className="card-header" id="ff-four">
									<h5 className="mb-0">
										<button className="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
											05. Will the resources be available for life time?
											<i className="fa fa-eye" />
										</button>
									</h5>
								</div>
								<div id="f-four" className="collapse" aria-labelledby="ff-four" data-parent="#accordion">
									<div className="card-body">
										Yes, you can have access to all the study material.
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

export default Faq