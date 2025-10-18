import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class TestimonialV4 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="pricing-area pd-top-280 pd-bottom-120 text-center" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/pricing-bg.png)' }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-7 col-md-11">
						<div className="section-title text-center">
							<h6 className="sub-title double-line">Client Testimonials</h6>
							<h2 className="title">What our clients say </h2>
						</div>
					</div>
				</div>
				<div className="testimonial-slider-2 owl-carousel">
					<div className="item">
						<div className="single-testimonial-inner">
							<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
							<p>Rebert’s 360° Industry-Ready Program completely changed the way I approach coding. The one-hour daily technical sessions and live doubt-solving kept me consistent, while the monthly Hackerrank contests pushed my problem-solving speed. The real-world MERN projects and two-month onsite internship helped me gain the kind of practical exposure college alone couldn’t provide. I now feel fully prepared for placements.</p>
							<div className="media testimonial-author">
								<div className="media-left">
									<img src={publicUrl + "assets/img/testimonial/1.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h6>Ananya Rao </h6>
									<p>B.Tech (CSE), SIT</p>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="single-testimonial-inner">
							<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
							<p>The MERN Stack track at Rebert was extremely well-structured. Every week we had tests, assignments, and workshops that simulated industry challenges. The mentors were patient and approachable — even outside sessions, the 24/7 chatbot helped me resolve technical issues. What stood out most was the balance between technical training and personal growth — from communication skills to career counselling, everything was covered</p>
							<div className="media testimonial-author">
								<div className="media-left">
									<img src={publicUrl + "assets/img/testimonial/2.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h6>Priya Singh</h6>
									<p>MCA, MIT College (Pune)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="single-testimonial-inner">
							<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
							<p>Rebert’s program gave me hands-on experience with live data projects and exposure to cutting-edge technologies in AI and ML. The research-based approach, combined with soft-skill and aptitude sessions, made me confident for both interviews and real-world problem-solving. I also got to work on a live internship project that I later showcased in my portfolio — the experience felt genuinely industry-grade</p>
							<div className="media testimonial-author">
								<div className="media-left">
									<img src={publicUrl + "assets/img/testimonial/2.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h6>Lalita Singh</h6>
									<p>BCA, Poona College (Pune)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default TestimonialV4