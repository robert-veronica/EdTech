import React, { Component } from "react";

class RegisterCoursePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			mobile: "",
			password: "",
			confirmPassword: "",
			loading: false,
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlePayment = async (e) => {
		e.preventDefault();
		this.setState({ loading: true });

		try {
			const { email, mobile } = this.state;

			const res = await fetch("http://localhost:5000/api/payment", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					amount: 100, // ₹1.00 for testing
					userId: email || mobile,
				}),
			});

			const data = await res.json();

			if (data?.url && data?.data) {
				// Create form and redirect to PhonePe sandbox
				const form = document.createElement("form");
				form.method = "POST";
				form.action = data.url;

				const input = document.createElement("input");
				input.type = "hidden";
				input.name = "request";
				input.value = data.data;
				form.appendChild(input);

				document.body.appendChild(form);
				form.submit();
			} else {
				alert("Failed to initiate payment");
			}
		} catch (err) {
			console.error("Payment error:", err);
			alert("Something went wrong!");
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		return (
			<div className="signup-page-area pd-top-120 pd-bottom-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-7">
							<form className="signin-inner" onSubmit={this.handlePayment}>
								<div className="row">
									<div className="col-12">
										<div className="single-input-inner style-bg-border">
											<input
												type="text"
												name="firstName"
												placeholder="First Name"
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="single-input-inner style-bg-border">
											<input
												type="text"
												name="lastName"
												placeholder="Last Name"
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="single-input-inner style-bg-border">
											<input
												type="email"
												name="email"
												placeholder="Email"
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="single-input-inner style-bg-border">
											<input
												type="text"
												name="mobile"
												placeholder="Mobile No."
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="single-input-inner style-bg-border">
											<input
												type="password"
												name="password"
												placeholder="Password"
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="single-input-inner style-bg-border">
											<input
												type="password"
												name="confirmPassword"
												placeholder="Confirm Password"
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="col-12 mb-4">
										<button
											type="submit"
											className="btn btn-base w-100"
											disabled={this.state.loading}
										>
											{this.state.loading ? "Processing..." : "Pay & Register"}
										</button>
									</div>
									{/* <div className="col-12">
										<span>Already have an account?</span>
										<a className="ml-2" href="/sign-in">
											<strong>Sign in</strong>
										</a>
									</div> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterCoursePage;
