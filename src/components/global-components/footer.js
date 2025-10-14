import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		const publicUrl = process.env.PUBLIC_URL + '/';
		const minscript = document.createElement('script');
		minscript.async = true;
		minscript.src = publicUrl + 'assets/js/main.js';

		document.body.appendChild(minscript);
	}

	render() {
		const publicUrl = process.env.PUBLIC_URL + '/';

		return (
			<>
				<link rel="stylesheet" href="%PUBLIC_URL%/assets/css/footer.css" />

				<section
					className="pre-footer-corporate bg-image-7 bg-overlay-darkest"
					style={{
						backgroundImage: 'url(assets/img/bg-image-7.jpg)',
						backgroundPosition: 'center 50%',
					}}
				>
					<div className="container">
						<div className="row justify-content-sm-center justify-content-lg-start row-30 row-md-60">

							{/* About Us */}
							<div className="col-sm-10 col-md-6 col-lg-10 col-xl-3">
								<h6>About Us</h6>
								<p>
									Rebert Technologies Pvt. Ltd. is a leading software development team with years of experience working
									on different packages for a variety of businesses. Whether you are after a simple software for collection
									results or a complex one for statistical analysis, we have you covered. We currently operate locally,
									helping clients to grow their businesses. You can get in touch with us through our booking form – we look
									forward to hearing from you and can't wait to help you.
								</p>
							</div>

							{/* Navigation */}
							<div className="col-sm-10 col-md-6 col-lg-3 col-xl-3">
								<center>
									<h6>Navigation</h6>
									<ul className="comment-minimal__link">
										<li className="active"><Link to="/">Home</Link></li>
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/services">Services</Link></li>
										{/* <li><Link to="/portfolio">Portfolio</Link></li> */}
										<li><Link to="/career">Career</Link></li>
										{/* <li><Link to="/industrain">Industrial Training</Link></li> */}
										<li><Link to="/contacts">Contact Us</Link></li>
									</ul>
								</center>
							</div>

							{/* Our Services */}
							<div className="col-sm-10 col-md-6 col-lg-5 col-xl-3">
								<h6>Our Services</h6>
								<ul className="list-xs">
									{[
										"Web Design & Development",
										"App Development",
										"All BE Projects",
										"Cyber Security Solutions",
										"Creative Design Services",
										"Digital Marketing & Branding"
									].map((service, index) => (
										<li key={index}>
											<article className="comment-minimal">
												<p className="comment-minimal__link"><a>{service}</a></p>
											</article>
										</li>
									))}
								</ul>
							</div>

							{/* Contacts */}
							<div className="col-sm-10 col-md-6 col-lg-4 col-xl-3">
								<h6>Contacts</h6>
								<ul className="list-xs">
									<li>
										<dl className="list-terms-minimal">
											<dt>Address</dt>
											<dd>Pune, Maharashtra</dd>
										</dl>
									</li>
									<li>
										<dl className="list-terms-minimal">
											<dt>Phones</dt>
											<dd>
												<ul className="list-semicolon">
													<li><a href="tel:+919922772959">+91 9922772959</a></li>
													<li><a href="tel:+917798992484">+91 7798992484</a></li>
												</ul>
											</dd>
										</dl>
									</li>
									<li>
										<dl className="list-terms-minimal">
											<dt>E-mail</dt>
											<dd><a href="mailto:admin@rebert.in">admin@rebert.in</a></dd>
										</dl>
									</li>
									<li>
										<dl className="list-terms-minimal">
											<dt>We are open</dt>
											<dd>24/7</dd>
										</dl>
									</li>
								</ul>

								<div className="group-lg group-middle">
									<a
										href={`${publicUrl}public/Privacy Policy.pdf`}
										target="_blank"
										rel="noopener noreferrer"
										className="button button-black button-shadow"
									>
										View Privacy & Data Policy
									</a>
									<a
										href={`${publicUrl}public/Refund Policy.pdf`}
										target="_blank"
										rel="noopener noreferrer"
										className="button button-black button-shadow"
									>
										View Refund Policies
									</a>
									<a
										href={`${publicUrl}public/Terms & Conditions.pdf`}
										target="_blank"
										rel="noopener noreferrer"
										className="button button-black button-shadow"
									>
										View Terms & Conditions
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="footer-corporate bg-gray-darkest">
					<div className="container">
						<div className="footer-corporate__inner">
							<p className="rights">
								<span>Rebert Technologies Pvt. Ltd.</span>
								<span>&nbsp;</span>
								<span className="copyright-year">{new Date().getFullYear()}</span>. All Rights Reserved.
							</p>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer_v1;
