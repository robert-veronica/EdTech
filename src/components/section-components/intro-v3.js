import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../section-components/CSS/flipcard.css';

class IntroV3 extends Component {
	render() {
		// let publicUrl = process.env.PUBLIC_URL + '/';

		return (
			<div className="intro-area intro-area--top go-top">
				<div className="container">
					<h2 className="section-title1">Our Vision </h2>
					<div className="cards-grid">

						{/* New Flip Card */}
						<div className="flip-card-container">
							<div className="flip-card">
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<p>TRAIN</p>
									</div>
									<div className="flip-card-back">
										<p>Teach you the right foundation.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flip-card-container">
							<div className="flip-card">
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<p>REINVENT</p>
									</div>
									<div className="flip-card-back">
										<p>Help you Reinvent your mindset and skills.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flip-card-container">
							<div className="flip-card">
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<p>AWAKEN</p>
									</div>
									<div className="flip-card-back">
										<p>Awaken your awareness of the corporate world.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flip-card-container">
							<div className="flip-card">
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<p>INTERN</p>
									</div>
									<div className="flip-card-back">
										<p>Let you Intern to integrate learning in real projects.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flip-card-container">
							<div className="flip-card">
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<p>NETWORK</p>
									</div>
									<div className="flip-card-back">
										<p>Guide you to Network for lasting career growth.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default IntroV3;
