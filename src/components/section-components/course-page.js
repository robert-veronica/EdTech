import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
import "./CSS/coursecontent.css";

class CoursePage extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="coursebag pd-top-60 pd-bottom-120">
        <h2 style={{ textAlign: "center" }}>E-Learning</h2>
        <div className="container coursecontainerbox ">
          {/* <div className="row">
				<div className="col-6 video">
				</div>
				<div className="col-6">
				
				</div>
			</div> */}
          <div className="video">
            <h4>Video 1</h4>
            <video src={publicUrl + "assets/img/video.mp4"} autoPlay></video>
          </div>
          <div className="sessionvideos">
            <h3>Course Name</h3>
            <div className="course_sessions">
              <h4>Session 1</h4>
              <ul>
                <li>Pretest</li>
                <li>Video 1</li>
                <li>Video 2</li>
                <li>Posttest</li>
              </ul>
            </div>
            <div className="course_sessions">
              <h4>Session 2</h4>
              <ul>
                <li>Pretest</li>
                <li>Video 1</li>
                <li>Video 2</li>
                <li>Posttest</li>
              </ul>
            </div>
            <div className="course_sessions">
              <h4>Session 3</h4>
              <ul>
                <li>Pretest</li>
                <li>Video 1</li>
                <li>Video 2</li>
                <li>Posttest</li>
              </ul>
            </div>
            <div className="course_sessions">
              <ul>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoursePage;
