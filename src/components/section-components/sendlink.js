import React, { useState } from "react";
import "./CSS/sendlink.css";

function Sendlink() {
  const [batch, setBatch] = useState();
  return (
    <div className="pd-top-60">
      <div className="container boxform boxcontainer">
        <h2 style={{ textAlign: "center" }}>Batch</h2>
        <form action="">
          <div class="meetlink my-4">
            <select
              onChange={(e) => {
                if (e.target.value) {
                  setBatch(e.target.value);
                }
              }}
              value={batch}
            >
              <option value="batch1">Batch 1</option>
              <option value="batch2">Batch 2</option>
              <option value="batch3">Batch 3</option>
            </select>
            <input
              class="meetlinkinput"
              type="url"
              placeholder="Meeting link"
            />
            <i class="fas fa-link"></i>
          </div>
          <div clas="my-4">
            <label  for="birthdaytime">Date And Time:</label><br/>
            <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
          </div>
          <div class="meetdesc my-4">
            <label for="meetdesc">Meet Description</label>
            <textarea name="meetdesc" id="meetdesc"></textarea>
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sendlink;
