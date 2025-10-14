import React, { useState } from "react";
import "animate.css";
import "./CSS/instructor.css";
import CoursePage from "./course-page";
import Batch from "./batch";
import Sendlink from "./sendlink";
import Vclassroom from "./vclassroom";
import Createcourse from "./creatcourse";

function Trainer() {
  const [course, setCourse] = useState(true);
  const [batch, setBatch] = useState(false);
  const [link, setLink] = useState(false);
  const [vclassroom, setVclassroom] = useState(false);
  const [create, setCreate] = useState(false);
  const batchfunc = () => {
    setCourse(false);
    setLink(false);
    setBatch(true);
    setVclassroom(false);
    setCreate(false);
  };
  const coursefunc = () => {
    setBatch(false);
    setLink(false);
    setCourse(true);
    setVclassroom(false);
    setCreate(false);
  };
  const linkfunc = () => {
    setBatch(false);
    setCourse(false);
    setLink(true);
    setVclassroom(false);
    setCreate(false);
  };
  const vfunc = () => {
    setBatch(false);
    setCourse(false);
    setLink(false);
    setVclassroom(true);
    setCreate(false);
  };
  const createfunc = () => {
    setCreate(true);
    setBatch(false);
    setCourse(false);
    setLink(false);
    setVclassroom(false);
  };
  return (
    <div className="team-area pd-bottom-70 go-top">
      <div className="container instructorpanel">
        <div className="instructor">
          {/* <div className="information">
            Info
          </div>
          <div>|</div> */}
          <div className="course1 dropdown">
            All Course
            <div class="dropdown-content">
              <p onClick={coursefunc}>E-learning</p>
              <p onClick={vfunc}>Virtual Classroom</p>
              {/* <a href="#">Link 3</a> */}
            </div>
          </div>
          <div>|</div>
          <div className="batch" onClick={batchfunc}>
            Your Batches
          </div>
          <div>|</div>
          <div className="createcourse" onClick={createfunc}>
            Create Course
          </div>
          <div>|</div>
          <div className="sendlink" onClick={linkfunc}>
            Send Link
          </div>
        </div>

        <div className="displaycourse">
          {course && <CoursePage />}
          {vclassroom && <Vclassroom />}
          {batch && <Batch />}
          {link && <Sendlink />}
          {create && <Createcourse />}
        </div>
        {/* <div className="displaybatch">

		  </div>
		  <div className="displaylink"></div> */}
      </div>
      &lt;
    </div>
  );
}

export default Trainer;
