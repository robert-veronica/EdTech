import React, { Component, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
import "./CSS/admin.css";
// import { toBeChecked } from "@testing-library/jest-dom";
import axios from 'axios';
// import { Redirect, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [options, setOptions] = useState();
  const [role, setRole] = useState("Employee");
  const [inputList, setInputList] = useState([
    { first_name: "", last_name: "", email: "", phone: null, role: "employee" },
  ]);
  const [sessionlist, setsessionlist] = useState([
    { videos: Number, assessment_criteria: Number },
  ]);


  const [no_of_sessions, setNo_of_sessions] = useState(null);
  const [course_name, setCourse_name] = useState("");
  const [ispretest, setIspretest] = useState(false);
  const [isposttest, setIsposttest] = useState(false);

  const [testingrerender, setTestingrerender] = useState(1)
  const [redirect, setredirect] = useState(false);



  const [AllEmployees, setAllEmployees] = useState([])
  useEffect(() => {
    console.log("Hello New", sessionlist);
    axios.get("http://localhost:5000/user/all/employees")
      .then(response => {
        console.log("HEllo");
        console.log(response);
        setAllEmployees(response.data);
      })
      .catch(err => {
        toast.error('Server Error While Fetching Employee Data', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [sessionlist, testingrerender])


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    // console.log(inputList);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { first_name: "", last_name: "", email: "", phone: "", role: "employee" },
    ]);
  };
  const addsession = () => {
    setsessionlist([
      ...sessionlist,
      { videos: Number, assessment_criteria: Number },
    ]);
    console.log(sessionlist);
  };

  const removesession = (i) => {
    // console.log(sessionlist);
    var temp = [...sessionlist];
    console.log(temp);
    // temp.splice(i,1);
    // setsessionlist(temp);
    // console.log(sessionlist);
    // setsessionlist(sessionlist.splice(i,1));
    temp.splice(i, 1);
    console.log(temp);
    setsessionlist(temp);
    console.log(sessionlist.length);
    // console.log(temp);
  }

  const onchangevideo = (e, i) => {
    var temp = [...sessionlist];
    temp[i].videos = e.target.value;
    setsessionlist(temp);
  }
  const onchangeassessmentcriteria = (e, i) => {
    var temp = [...sessionlist];
    temp[i].assessment_criteria = e.target.value;
    setsessionlist(temp);
  }


  const onvirtualsubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log("sessions: " + no_of_sessions);
    console.log("pretest: " + ispretest);
    console.log("posttest: " + isposttest);
    var data = {
      course_name: course_name,
      mode: "virtual",
      ispretest: ispretest,
      isposttest: isposttest,
      no_of_sessions: no_of_sessions,
      feedback_questions: feedbackquestions
    }
    axios(
      {
        url: "http://localhost:5000/course/create/virtual",
        method: "POST",
        data: data,
        // headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        console.log(res);
        setFeedbackquestions([""]);
        setCourse_name("");
        setOptions("");
        toast.success('Virtual Classroom Course Designed Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setredirect(true);

        // location.href = "/app/Mentor/dashboard"
      })
      .catch(err => {
        console.log("Error in virtual");
        toast.error('Server Error! Please Try Later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }




  const onelearningsubmit = (e) => {
    e.preventDefault();
    console.log("Submitted E-learning");
    // console.log("sessions: "+no_of_sessions);
    console.log("pretest: " + ispretest);
    console.log("posttest: " + isposttest);
    console.log("no. of sessions" + sessionlist.length);
    var tempsessions = []
    var arrayofvideocount = [];
    for (let i = 0; i < sessionlist.length; i++) {
      // var temp=document.getElementById(`elearningvideos${i+1}`);
      // console.log(temp.value);
      var tempobj = {
        no_of_videos: parseInt(sessionlist[i].videos),
        assessment_criteria: 5
      }
      tempsessions.push(tempobj);
      // arrayofvideocount.push(parseInt(temp.value));

    }
    console.log("TempSessions", tempsessions);
    console.log(arrayofvideocount)
    var data = {
      course_name: course_name,
      mode: "elearning",
      // no_of_sessions:sessionlist.length,
      // no_of_videos_per_session:arrayofvideocount,
      sessionsinfo: tempsessions,
      feedback_questions: feedbackquestions

    }
    axios(
      {
        url: "http://localhost:5000/course/create/elearning",
        method: "POST",
        data: data,
        // headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        console.log(res);
        setFeedbackquestions([""]);
        setCourse_name("");
        setOptions("");
        setsessionlist([
          { videos: Number, assessment_criteria: Number },
        ]);
        toast.success('E-learning Course Designed Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // setredirect(true);

        // location.href = "/app/Mentor/dashboard"
      })
      .catch(err => {
        console.log("Error in E-learning Server");
        toast.error('Server Error! Please Try Later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }






  const onemployeedatasubmit = (e) => {
    e.preventDefault();
    console.log("data" + inputList);
    var data = {
      data: inputList
    }
    axios(
      {
        url: "http://localhost:5000/user/register/employeedatabyadmin",
        method: "POST",
        data: data,
        // headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        console.log(res);
        setTestingrerender(testingrerender + 1);
        console.log(testingrerender);
        toast.success(' Employee Data Added Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setInputList([
          { first_name: "", last_name: "", email: "", phone: "", role: "employee" },
        ]);
        // setredirect(true);

        // location.href = "/app/Mentor/dashboard"
      })
      .catch(err => {
        console.log("Error while submitting employee data");
        toast.error('Server Error! Please Try Later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

  }







  // For Feedback 
  const [feedbackquestions, setFeedbackquestions] = useState([""]);
  const onfeedbackchange = (e, i) => {
    const temp = [...feedbackquestions];
    temp[i] = e.target.value;
    setFeedbackquestions(temp);
    console.log(feedbackquestions);
  }
  const addfeedback = () => {
    setFeedbackquestions([...feedbackquestions, ""]);
  }
  const removefeedback = (index) => {
    const temp = [...feedbackquestions];
    temp.splice(index, 1);
    setFeedbackquestions(temp);
  };


  return (
    <div className="main-blog-area pd-bottom-90">
      {/* { redirect ? (<Redirect  to="/admin" />) : null} */}
      <div className="course-details-nav-tab text-center">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {/* <li className="nav-item">
            <a
              className="nav-link active"
              id="tab1-tab"
              data-toggle="tab"
              href="#tab1"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              Info
            </a>
          </li> */}
          <li className="nav-item">
            <a
              className="nav-link active"
              id="tab2-tab"
              data-toggle="tab"
              href="#tab2"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              Design Course
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
              Employees
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="team-details-page">
          <div className="tab-content" id="myTabContent">
            {/* <div
              className="tab-pane fade"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              <div className="row">
                <div className="col-lg-5">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/team/6.png"} alt="img" />
                  </div>
                </div>
                <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                  <div className="details">
                    <h3>Christine Pearson</h3>
                    <span className="designation">Design Expert</span>

                    <span>
                      Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
                      quick-jived waltz. Brick quiz whangs jumpy veldt
                    </span>
                    <p className="mt-4">
                      Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
                      quick-jived waltz. Brick quiz whangs jumpy veldt quiz
                      graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                      Waltz, bad nymph, for quick jigs vex! Fox{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div
              className="tab-pane fade show active"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab2-tab"
            >
              {/* <div className="course-details-content">
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
                    </div> */}
              <div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Course Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" value={course_name} onChange={(e) => { setCourse_name(e.target.value); console.log(course_name); }} aria-describedby="emailHelp" required />
                </div>
                Enter mode of the course &nbsp;
                <select
                  class="form-select" aria-label="Default select example"
                  onChange={(e) => {
                    if (e.target.value) {
                      setOptions(e.target.value);
                      setFeedbackquestions([""]);
                    }
                  }}
                  value={options}
                >
                  <option value="">Select</option>
                  <option value="virtual">Virtual Classroom</option>
                  <option value="elearn">E-learning</option>
                </select>
                <br />
                {options === "virtual" && (
                  <form onSubmit={onvirtualsubmit} method="post">
                    <input
                      type={"number"}
                      placeholder="Enter number of sessions"
                      className="my-2"
                      style={{ width: "50%" }}
                      value={no_of_sessions}
                      onChange={(e) => { setNo_of_sessions(e.target.value) }}
                      required
                    />
                    <br />
                    <div className="inputfields">
                      Pretest <input type="checkbox"
                        value={ispretest}
                        onChange={(e) => { setIspretest(!ispretest); console.log(e.target.value); }}
                      />
                      <br />
                      Post-test <input type="checkbox"
                        value={isposttest}
                        onChange={(e) => { setIsposttest(!isposttest) }}
                      />
                    </div>
                    <br />
                    <div className="mt-3">
                      <p>Feedback Questions</p>
                      {
                        feedbackquestions.map((data, i) => {
                          return <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">{i + 1}</span>
                            <input type="text" class="form-control" placeholder="Question" value={data} onChange={(e) => { onfeedbackchange(e, i) }} aria-label="Username" aria-describedby="basic-addon1" required />

                            <div class="btn-group" role="group" aria-label="Basic example">
                              {feedbackquestions.length !== 1 && (
                                <button
                                  type="button"
                                  class="btn btn-outline-danger"
                                  onClick={() => removefeedback(i)}
                                >
                                  -
                                </button>
                              )}
                              {feedbackquestions.length - 1 === i && (
                                <button
                                  type="button"
                                  class="btn btn-outline-success"
                                  onClick={addfeedback}
                                >
                                  +
                                </button>
                              )}
                            </div>
                          </div>
                        })
                      }
                    </div>
                    <br />
                    <button type="submit" className=" btn btn-outline-primary">Submit</button>
                  </form>
                )}
                {options === "elearn" && (
                  <form method="post" onSubmit={onelearningsubmit}>

                    <br />

                    <div className="">
                      {sessionlist.map((x, i) => {
                        return (
                          <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} className="card bg-white rounded mt-4 ">
                            <div className="card-body my-2">
                              <h4>Session {i + 1}</h4>
                              <input type="number" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" value={x.videos} onChange={(e) => { onchangevideo(e, i) }} placeholder="Number of Videos" />

                              <input type="number" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" value={x.assessment_criteria} onChange={(e) => { onchangeassessmentcriteria(e, i) }} placeholder="Assessment Criteria (In Percentage)" />

                              {
                                i > 0 ? <button onClick={() => { removesession(i) }} type="button" className="btn btn-outline-danger btn-sm">Remove Session</button> : null
                              }
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button onClick={addsession} type="button" className="btn btn-outline-success btn-sm mt-4">Add session +</button>

                    <br />
                    <div className="mt-3">
                      <p>Feedback Questions</p>
                      {
                        feedbackquestions.map((data, i) => {
                          return <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">{i + 1}</span>
                            <input type="text" class="form-control" placeholder="Question" value={data} onChange={(e) => { onfeedbackchange(e, i) }} aria-label="Username" aria-describedby="basic-addon1" required />

                            <div class="btn-group" role="group" aria-label="Basic example">
                              {feedbackquestions.length !== 1 && (
                                <button
                                  type="button"
                                  class="btn btn-outline-danger"
                                  onClick={() => removefeedback(i)}
                                >
                                  -
                                </button>
                              )}
                              {feedbackquestions.length - 1 === i && (
                                <button
                                  type="button"
                                  class="btn btn-outline-success"
                                  onClick={addfeedback}
                                >
                                  +
                                </button>
                              )}
                            </div>
                          </div>
                        })
                      }
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                  </form>
                )}
              </div>
              <hr />{" "}
            </div>

            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="tab3-tab"
            >
              <div className="course-details-content">
                <h3>Add files</h3>
                <input type="file" multiple className="my-4" />
                <button className="uploadbtn">Upload</button>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab4"
              role="tabpanel"
              aria-labelledby="tab4-tab"
            >
              <div className="course-details-content">
                <div className="container pd-top-60">
                  <h2 style={{ textAlign: "center" }}>Employees</h2>

                  <div className="App">
                    <h3>Add Employees</h3>
                    <form method="post" onSubmit={onemployeedatasubmit}>
                      {inputList.map((x, i) => {
                        return (
                          <div className="mw-100">
                            <div class="mb-3  d-flex flex-wrap  justify-content-between">
                              {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}

                              <div>
                                <input
                                  type="name"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  placeholder="First Name"
                                  aria-describedby="emailHelp"
                                  name="first_name"
                                  value={x.first_name}
                                  onChange={(e) => handleInputChange(e, i)}
                                  required
                                />
                              </div>
                              {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                              <div>
                                <input
                                  type="name"
                                  class="form-control"
                                  name="last_name"
                                  placeholder="Last Name"
                                  id="exampleInputPassword1"
                                  value={x.last_name}
                                  onChange={(e) => handleInputChange(e, i)}
                                  required
                                />
                              </div>

                              <div>
                                <input
                                  type="name"
                                  class="form-control"
                                  name="email"
                                  placeholder="Email"
                                  id="exampleInputPassword1"
                                  value={x.email}
                                  onChange={(e) => handleInputChange(e, i)}
                                  required
                                />
                              </div>
                              {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                              <div>
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="Phone Number"
                                  name="phone"
                                  id="exampleInputPassword1"
                                  value={x.phone}
                                  onChange={(e) => handleInputChange(e, i)}
                                  required
                                />
                              </div>

                              <div>
                                {inputList.length !== 1 && (
                                  <button
                                    type="button"
                                    class="btn btn-outline-danger"
                                    onClick={() => handleRemoveClick(i)}
                                  >
                                    -
                                  </button>
                                )}
                                {inputList.length - 1 === i && (
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                    onClick={handleAddClick}
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* <input
                            name="first_name"
                            placeholder="Enter First Name"
                            value={x.first_name}
                            onChange={e => handleInputChange(e, i)}
                          />
                          <input
                            className="ml10"
                            name="last_name"
                            placeholder="Enter Last Name"
                            value={x.last_name}
                            onChange={e => handleInputChange(e, i)}
                          /> */}
                            {/* <div className="btn-box">
                            {inputList.length !== 1 && <button type="button" class="btn btn-outline-danger"  onClick={() => handleRemoveClick(i)}>-</button>}
                            {inputList.length - 1 === i &&      <button type="button" class="btn btn-outline-success" onClick={handleAddClick} >+</button>}
                          </div> */}
                            {/* <button type="button" class="btn btn-outline-success" onClick={handleAddClick} >+</button>
<button type="button" class="btn btn-outline-danger"  onClick={() => handleRemoveClick(i)}>-</button> */}
                          </div>
                        );
                      })}
                      <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">
                          Submit
                        </button>
                        {/* <button class="btn btn-primary" type="button">Button</button> */}
                      </div>
                    </form>
                    {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
                  </div>
                  {/* <input
                    type="text"
                    class="form-control searchemployee"
                    autoFocus
                    placeholder="Search..."
                  /> */}
                  <div class="box">
                    <h3 className="mt-5">All Employees</h3>
                    <table class="table mt-4">
                      <thead class="thead">
                        <tr className="rowline rowlinehead">
                          <th scope="col">Sr no.</th>
                          <th scope="col">Employee Name</th>
                          <th scope="col">Employee Email</th>
                          {/* <th scope="col">Role</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          AllEmployees.map((data, i) => {
                            return <tr className="rowline">
                              <th scope="row">{i + 1}</th>
                              <td>{data.first_name} {data.last_name}</td>
                              <td>{data.email}</td>

                            </tr>
                          })
                        }


                      </tbody>
                    </table>
                    {/* <button className="updatebtn">Update</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
