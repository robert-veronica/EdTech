import React from "react";

function Vclassroom() {
  return (
    <div className="coursebag pd-top-60 pd-bottom-120">
      <h2 style={{ textAlign: "center" }}>Virtual Classroom</h2>
      <div className="container ">
        <div className="session">
          <h3>Assessments</h3>
        <div className="createassesment">
            <input type="text" name="googleform" id="googleform" placeholder="Embed Goolge Form"/>
        </div>
          <div className="sessioncontents my-3">
            <div className="pretestbox"></div>
            <div className="pretestbox"></div>
            <div className="pretestbox"></div>
          </div>
          <div className="createasses">Update</div>
        </div>
        
      </div>
    </div>
  );
}

export default Vclassroom;
