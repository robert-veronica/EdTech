import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		// let imgattr = "Footer logo"

		return (
			<footer className="footer-area footer-area-2 bg-gray">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_about text-center">
									<a href="index.html"><img src={publicUrl + "assets/img/logo-x.webp"} alt="img" /></a>
									<div className="details">
										<p>Rebert Technologies Pvt. Ltd. is a leading software development team with years of experience working
											on different packages for a variety of businesses. Whether you are after a simple software for collection
											results or a complex one for statistical analysis, we have you covered. We currently operate locally,
											helping clients to grow their businesses. You can get in touch with us through our booking form – we look
											forward to hearing from you and can't wait to help you.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">Contact Us</h4>
									<ul className="details">
										<li><i className="fa fa-map-marker" /> Pune, Maharashtra</li>
										<li><i className="fa fa-envelope" /> admin@rebert.inm</li>
										<li><i className="fa fa-phone" /> +91 9922772959
											<li></li> +91 7798992484</li>
									</ul>
								</div>
							</div>

							{/* <div className="col-lg-3 col-md-6">
								<div className="widget widget_blog_list">
									<h4 className="widget-title">News &amp; Blog</h4>
									<ul>
										<li>
											<h6><Link to="/blog-details">Big Ideas Of Business Branding Info.</Link></h6>
											<span className="date"><i className="fa fa-calendar" />December 7, 2021</span>
										</li>
										<li>
											<h6><Link to="/blog-details">Ui/Ux Ideas Of Business Branding Info.</Link></h6>
											<span className="date"><i className="fa fa-calendar" />December 7, 2021</span>
										</li>
									</ul>
								</div>
							</div>
							 */}


							<div className="col-lg-3 col-md-6">
								<div className="widget widget_nav_menu">
									<h4 className="widget-title">Navigation</h4>
									<ul className="go-top">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about">About Us </Link></li>
										<li><Link to="/services">Services</Link></li>
										<li><Link to="/career">Career</Link></li>
										<li><Link to="/contacts">Contact Us</Link></li>
									</ul>
								</div>
							</div>
							{/* Three download buttons */}

							<div className="col-lg-3 col-md-6">
								<div className="widget widget_blog_list">
									<h4 className="widget-title">Policies &amp; Conditions</h4>
									<ul>
										<li><a
											href={`${publicUrl}public/Privacy Policy.pdf`}
											target="_blank"
											rel="noopener noreferrer"
											className="button button-black button-shadow"
										>
											View Privacy & Data Policies
										</a></li>
										<li><a
											href={`${publicUrl}public/Refund Policy.pdf`}
											target="_blank"
											rel="noopener noreferrer"
											className="button button-black button-shadow"
										>
											View Refund Policies
										</a></li>
										<li><a
											href={`${publicUrl}public/Terms & Conditions.pdf`}
											target="_blank"
											rel="noopener noreferrer"
											className="button button-black button-shadow"
										>
											View Terms & Conditions
										</a></li>
									</ul>
								</div>
							</div>


						</div>
					</div>
				</div>
				{/* <div className="footer-bottom">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-5 align-self-center">
			          <p>Copyright 2021 by edumint.com</p>
			        </div>
			        <div className="col-md-7 text-md-right align-self-center mt-md-0 mt-2">
			          <div className="widget_nav_menu">
			            <ul className="go-top">
			              <li><Link to="/">Home</Link></li>
			              <li><Link to="/about">About Us</Link></li>
			              <li><Link to="/pricing">Our Pricing</Link></li>
			              <li><Link to="/blog">blog</Link></li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div> */}
			</footer>

		)
	}
}


export default Footer_v2