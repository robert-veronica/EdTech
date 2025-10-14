import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Createcourse extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="coursebag pd-top-60 pd-bottom-120">
        <div className="container">
          Enter no. of sessions do you want to enter in course &nbsp;
          {/* <select
            onChange={(e) => {
              if (e.target.value) {
                setOptions(e.target.value);
              }
            }}
            value={options}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select> */}
        </div>
        <div className="formsection container my-2">
          <h4>Session 1</h4>
          <form action="">
            <div className="container googleform">
              <label htmlFor="pretest">Pretest</label>
              <br />
              <input type="url" placeholder="Embed a google form for Pretest" />
            </div>
            <div className="container inputcontents my-2">
              <div>
                <label htmlFor="sessionvideo">Add Session's video</label>
                <br />
                <input type="file" />
              </div>
              <div>
                <label htmlFor="sessionpdf" className="my-2">
                  Add Session's PDF
                </label>
                <br />
                <input type="file" multiple />
              </div>
            </div>
            <div className="container googleform">
              <label htmlFor="postest">Post-test</label>
              <br />
              <input
                type="url"
                placeholder="Embed a google form for Post-test"
              />
              <button className="submitbtn">Create +</button>
            </div>
          </form>
        </div>
        <hr />{" "}
        
      </div>
    );
  }
}

export default Createcourse;
