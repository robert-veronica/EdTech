import React, { Component } from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";
import Knowledgebank from "./knowledgebank";
// import CoursePage from "./course-page";
class CourseDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="course-single-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-course-detaila-inner">
                <div className="details-inner">
                  <h3 className="title">
                    <a href="course-details.html">🚀 360° Industry-Ready Training Program</a>
                  </h3>
                </div>
                {/* <div className="thumb">
			            <img src={publicUrl+"assets/img/course/9.png"} alt="img" />
			          </div> */}
                <div className="course-details-nav-tab text-center">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="tab1-tab"
                        data-toggle="tab"
                        href="#tab1"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab2-tab"
                        data-toggle="tab"
                        href="#tab2"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                      >
                        Course Contents
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab3-tab"
                        data-toggle="tab"
                        href="#tab3"
                        role="tab"
                        aria-controls="tab3"
                        aria-selected="false"
                      >
                        Knowledge Bank
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab4-tab"
                        data-toggle="tab"
                        href="#tab4"
                        role="tab"
                        aria-controls="tab4"
                        aria-selected="false"
                      >
                        Course Guidelines
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab1-tab"
                  >
                    <div className="course-details-content">
                      <p>
                        A 6-month, one-hour-per-day program designed to make college students industry-ready through hands-on learning, mentorship, and real projects. Covering MERN Stack, Flutter, and Data Science, the program blends live technical training, weekly assessments, and industry workshops led by expert mentors.

                        Students get real-client projects, monthly Hackerrank contests, and a guaranteed 2-month internship with certification and Letter of Recommendation. The program also includes career counselling, aptitude and communication training, and financial literacy for all-round growth.

                        With live doubt-solving, a 24/7 chatbot, and personal mentorship, learners receive the support they need at every step. Designed especially for engineering, BCA, MCA, and diploma students from colleges with limited placement exposure, this initiative offers industry workshops, scholarships, and international exposure.
                      </p>
                      <div className="roxw pt-4">
                        <div className="col-sm-6">
                          <ul className="single-list-wrap">
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> From Campus to Career
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Hands-On Industry Exposure
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Upskill. Intern. Succeed. Repeat.
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Skill-Based Career Launchpad
                            </li>

                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab2-tab"
                  >
                    <div className="course-details-content">
                      <p>Sequence to complet this course is as show below</p>
                      <ul className="single-list-wrap">
                        <li className="single-list-inner style-check-box">
                          <i className="fa fa-check" /> Pretest
                        </li>
                        <li className="single-list-inner style-check-box">
                          <i className="fa fa-check" /> Sessions
                        </li>
                        <li className="single-list-inner style-check-box">
                          <i className="fa fa-check" /> Virtual Classroom
                        </li>
                        <li className="single-list-inner style-check-box">
                          <i className="fa fa-check" /> Post Test
                        </li>
                        <li className="single-list-inner style-check-box">
                          <i className="fa fa-check" /> Feedback
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="tab3-tab"
                  >
                    <div className="course-details-content">
                      <Knowledgebank />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab4"
                    role="tabpanel"
                    aria-labelledby="tab4-tab"
                  >
                    <div className="ratings-list-inner mb-4">
                      <div className="row">
                        <div className="col-md-12 align-self-center text-center">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="td-sidebar">
                <div className="widget widget_feature pd-bottom-90">
                  <h4 className="widget-title">Course Features</h4>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" />
                      <span>Training Duration :</span> 4 Months
                    </li>
                    <li>
                      <i className="fa fa-clone" />
                      <span>Internship Duration:</span> 2 Months
                    </li>
                    <li>
                      <i className="fa fa-clipboard" />
                      <span>Doubt Solving Sessions :</span> 8 hrs
                    </li>

                    <li>
                      <i className="fa fa-clipboard" />
                      <span>Daily Commitment :</span> 1 hour (Mon–Sat)
                    </li>

                    <li>
                      <i className="fa fa-clipboard" />
                      <span>Industry Workshops :</span> 32
                    </li>

                    <li>
                      <i className="fa fa-clipboard" />
                      <span>Trainer:</span> Ethan Dean
                    </li>
                  </ul>

                  <center>
                    <Link to="/register-course">
                      <button
                        className="btn btn-success"
                        style={{ backgroundColor: "#80deea" }}
                      >
                        Register For Course
                      </button>
                    </Link>
                  </center>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default CourseDetails;
