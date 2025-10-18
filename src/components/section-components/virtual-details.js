import React, { Component } from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";
// import Knowledgebank from "./knowledgebank";
// import CoursePage from "./course-page";
class VirtualDetails extends Component {
  render() {
    // let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="course-single-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-course-detaila-inner">
                <div className="details-inner">
                  <h3 className="title">
                    <a href="course-details.html">Course Name</a>
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
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk MTV quiz graced by fox
                        whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
                        nymph, for quick jigs vex! Fox nymphs grab quick-jived
                        waltz. Brick quiz whangs jumpy veldt fox. Bright vixens
                        jump; dozy fowl quack. Quick wafting zephyrs vex bold
                        Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged
                        fop blew my junk TV quiz. How quickly daft jumping
                        zebras vex. Two driven jocks help fax my big quiz.
                        Quick, Baz, get my woven flax jodhpurs! "Now fax quiz
                        Jack!" my brave ghost pled. Five quacking zephyrs jolt
                        my wax bed. Flummoxed by job, kvetching W. zaps Iraq.
                        Cozy sphinx waves quart jug of bad milk. A very bad
                        quack might jinx zippy fowls. Few quips galvanized the
                        mock jury box. Quick brown dogs jump over the lazy fox.
                        The jay, pig, fox, zebra, and my wolves quack! Blowzy
                        red vixens fight for a quick jump.
                      </p>
                      <div className="row pt-4">
                        <div className="col-sm-6">
                          <ul className="single-list-wrap">
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Metus interdum metus
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Ligula cur maecenas
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Fringilla nulla
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 mt-3 mt-sm-0">
                          <ul className="single-list-wrap">
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Metus interdum metus
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Ligula cur maecenas
                            </li>
                            <li className="single-list-inner style-check-box">
                              <i className="fa fa-check" /> Fringilla nulla
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
                      {/* <Knowledgebank /> */}
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
                      <span>Duration :</span> 2 hours
                    </li>
                    <li>
                      <i className="fa fa-clipboard" />
                      <span>Sessions :</span> 8
                    </li>
                    <li>
                      <i className="fa fa-clone" />
                      <span>Categories:</span> Technology
                    </li>
                    <li>
                      <i className="fa fa-clipboard" />
                      <span>Trainer:</span> Ethan Dean
                    </li>
                  </ul>

                  <center>
                    <Link to="/virtual">
                      <button className="btn btn-success">View Course</button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VirtualDetails;
