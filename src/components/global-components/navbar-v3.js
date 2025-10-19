import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarV3 extends Component {
  componentDidMount() {
    const $ = window.$;

    $("body").addClass("home-3");
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imgattr = "logo";
    let anchor = "#";
    return (
      <div className="navbar-area">
        <nav className="navbar navbar-area-3 navbar-area navbar-expand-lg" >
          <div className="container nav-container" >
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#edumint_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/">
                <img src={publicUrl + "assets/img/logo-x.webp"} alt="img" width="216" height="80" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="btn btn-base" to="/sign-up">
                Sign Up
              </Link>
            </div>
            <div
              className="collapse navbar-collapse go-top"
              id="edumint_main_menu"
            >
              <ul className="navbar-nav menu-open">
                <li className="current-menu-item">
                  <Link to="/">Home</Link>
                  {/* <ul className="sub-menu">
				            <li><Link to="/">Home 01</Link></li>
	                        <li><Link to="/home-v2">Home 02</Link></li>
	                        <li><Link to="/home-v3">Home 03</Link></li>
			            </ul> */}
                </li>
                {/* <li className="menu-item-has-children">
                  <Link to="/course">Course</Link>
                  <ul className="sub-menu">
                    <li><Link to="/course-details">E-Learning</Link></li>
                    <li>
                      <Link to="/virtual-details">Virtual Classroom</Link>
                    </li>
                  </ul>
                </li> */}

                <li><Link to="/course-details">E-Learning</Link></li>

                <li>
                  <Link to="/trainers">Our Trainers</Link>
                </li>

                <li>
                  <Link to="/mentors">Our Mentors</Link>
                </li>

                {/* <li>
                  <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                  <Link to="/trainer">Trainer</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>  */}
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop style-black">
              <div className="emt-phone-wrap">
                <div className="emt-phone">
                  <i className="fa fa-phone" />
                  <div className="phone-number align-self-center">
                    Call Us <br />
                    <span>+91 9922772959</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarV3;
