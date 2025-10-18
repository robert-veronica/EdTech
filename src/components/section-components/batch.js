import React, { useState, useEffect } from "react";
import "./CSS/batch.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Batch() {
  const [checking, setChecking] = useState(0)
  const [AllBatches, setAllBatches] = useState([])
  const [AllEmployees, setAllEmployees] = useState([])
  const [AllCourses, setAllCourses] = useState([])
  const [AssignCourseID, setAssignCourseID] = useState("");
  const [batch_name, setBatch_name] = useState("")
  // AllEmployees.map((e) => {

  // })
  useEffect(() => {
    axios.get('http://localhost:5000/user/all_for_trainer_batch_create/employees')
      .then(response => {
        console.log("HEllo");
        // console.log(response.data);
        setAllEmployees(response.data);

        // this.setState({ classes: response.data.result });
      });

    axios.get('http://localhost:5000/batch/1')
      .then(response => {
        console.log("All Batches API");
        // console.log(response.data);
        setAllBatches(response.data);

        // this.setState({ classes: response.data.result });
      });



    axios.get('http://localhost:5000/course/all')
      .then(response => {
        console.log("All Courses API");
        console.log(response.data);
        setAllCourses(response.data);

        // this.setState({ classes: response.data.result });
      });

    var temp = AllEmployees;
    for (let i = 0; i < temp.length; i++) {
      temp[i].isSelected = false;
    }
    // temp.map(obj=> ({ ...obj, isSelected: 'false' }))
    setAllEmployees(temp);
    console.log(AllEmployees);
    // setRerender(!rerender);
  }, [AllEmployees])

  const [selectedfornewbatch, setselectedfornewbatch] = useState([])
  const handleaddclickfornewbatch = (e) => {
    console.log(e);
    // setselectedfornewbatch(oldArray => [...oldArray,e] )
    // console.log(selectedfornewbatch);
    var temp = AllEmployees;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i]._id == e) {
        temp[i].isSelected = true;
        console.log("Heyyy")
        break;
      }

    }
    setChecking(checking + 1)
    setAllEmployees(temp);
    console.log(AllEmployees);
  }
  const handleremoveclickfornewbatch = (e) => {
    var temp = AllEmployees;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i]._id == e) {
        temp[i].isSelected = false;
        break;
      }

    }
    setChecking(checking - 1)
    setAllEmployees(temp);
  }

  const handlesubmit = (e) => {

    e.preventDefault();
    console.log("Submitted");
    var ele = document.getElementById("alertonsubmit");
    if (checking <= 0) {

      // ele.classList.remove("d-none");
      // ele.classList.add("d-block");
      // console.log("Empty");

      toast.error('Please Select The Employees', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }
    // ele.classList.remove("d-block");
    // ele.classList.add("d-none");
    var temp = [];
    AllEmployees.map((a) => {
      if (a.isSelected == true) {
        temp.push(a._id);
      }
    })


    // Temp will contain id's of all selected employees
    console.log(temp);
    const data = {
      batch_name: batch_name,
      course_id: AssignCourseID,
      trainer_id: "df3243sdfd",
      employee_id: temp
    }
    console.log(data);
    axios(
      {
        url: "http://localhost:5000/batch/create",
        method: "POST",
        data: data,
        // headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        console.log(res);
        setBatch_name("");

        temp = [...AllEmployees];
        for (let i = 0; i < temp.length; i++) {
          temp[i].isSelected = false;
        };
        setAllEmployees(temp);

        // Trying to reset the select input after Form Submission
        // var x = document.getElementById("assigncourseselect");
        // var option = document.createElement("option");
        // option.text = "";
        // option.style.display="none";
        // x.add(option, x[0]);


        toast.success('New Batch Created Successfully', {
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
        // console.log("Error in virtual");
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


  return (
    <div className="container pd-top-60">
      <div className=" text-center">
        <ul className="nav nav-pills nav-fill mb-5" id="myTab" role="tablist">
          {
            AllBatches.map((data, i) => {
              return <li className="nav-item">
                <a
                  className="nav-link active"
                  className={i == 0 ? "nav-link active" : "nav-link"}
                  id={`tab${i + 1}-tab`}
                  data-toggle="tab"
                  href={`#tab${i + 1}`}
                  role="tab"
                  aria-controls={`tab${i + 1}`}
                  aria-selected="true"
                >
                  {data.batch_name}
                </a>
              </li>
            })
          }
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
              Batch 1
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a
              className="nav-link"
              id="tab2-tab"
              data-toggle="tab"
              href="#tab2"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              Batch 2
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
              Batch 3
            </a>
          </li> */}

          <li className="nav-item">
            <a
              // className="nav-link"
              className={AllBatches.length == 0 ? "nav-link active" : "nav-link"}
              id={`tab${AllBatches.length + 1}-tab`}
              data-toggle="tab"
              href={`#tab${AllBatches.length + 1}`}
              role="tab"
              aria-controls={`tab${AllBatches.length + 1}`}
              aria-selected="false"
            >
              Add Batch
            </a>
          </li>

        </ul>
      </div>
      <div className="tab-content" id="myTabContent">
        {
          AllBatches.map((data, i) => {
            return <div
              // className="tab-pane fade show active"
              className={i == 0 ? "tab-pane fade show active" : "tab-pane fade "}
              id={`tab${i + 1}`}
              role="tabpanel"
              aria-labelledby={`tab${i + 1}-tab`}
            >
              <h5 style={{ textAlign: "center" }}>{data.batch_name} Employees</h5>

              <div class="box" style={{ overflowX: "auto" }}>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Employee Name</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.employee_id.map((employees, index) => {
                        return <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{employees.first_name} {employees.last_name}</td>
                          <td>{employees.email}</td>
                        </tr>
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          })
        }
        {/* <div
          className="tab-pane fade show active"
          id="tab1"
          role="tabpanel"
          aria-labelledby="tab1-tab"
        >
          <h5 style={{ textAlign: "center" }}>Batch 1 Employees</h5>
          
          <div class="box" style={{overflowX:"auto"}}>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton@gmail.com</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Raju</td>
      <td>Raju@gmail.com</td>
    </tr>
  </tbody>
</table>
          </div>
        </div> */}


        {/* <div className="tab-pane fade"
          id="tab2"
          role="tabpanel"
          aria-labelledby="tab2-tab">
          <h5 style={{ textAlign: "center" }}>Batch 2 Employees</h5>
        
          <div class="box" style={{overflowX:"auto"}}>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton@gmail.com</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Raju</td>
      <td>Raju@gmail.com</td>
    </tr>
  </tbody>
</table>
          </div>
        </div> */}

        {/* 
        <div className="tab-pane fade"
          id="tab3"
          role="tabpanel"
          aria-labelledby="tab3-tab">
          <h5 style={{ textAlign: "center" }}>Batch 3 Employees</h5>
         
          <div class="box" style={{overflowX:"auto"}}>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton@gmail.com</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Raju</td>
      <td>Raju@gmail.com</td>
    </tr>
  </tbody>
</table>
          </div>
        </div> */}


        <div
          className={AllBatches.length == 0 ? "tab-pane fade show active" : "tab-pane fade "}
          // className="tab-pane fade"
          id={`tab${AllBatches.length + 1}`}
          role="tabpanel"
          aria-labelledby={`tab${AllBatches.length + 1}-tab`}>
          <form id="newbatchform" onSubmit={handlesubmit}>
            {/* <h5 className="mb-5" style={{ textAlign: "center" }}>Create Batch</h5> */}
            <div class="d-grid gap-2">
              <center>
                <button class="btn btn-outline-primary" type="submit"  >Create Batch</button>
              </center>
              {/* <div class="alert alert-danger d-none  fade show"   id="alertonsubmit" role="alert">
              Please Select The Employees
            
            </div> */}
            </div>

            <input type="text" className="form-control mt-5" placeholder="Batch Name" id="exampleInputEmail1" value={batch_name} onChange={(e) => { setBatch_name(e.target.value) }} required />
            <label for="sel1" className="mt-3">Assign Course:</label>
            <select class="form-control" id="assigncourseselect" required value={AssignCourseID} onChange={(e) => { setAssignCourseID(e.target.value); console.log(AssignCourseID); }}>
              {/* <option disabled selected hidden>Select</option> */}
              <option style={{ display: "none" }}></option>
              {/* <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option> */}
              {
                AllCourses.map((data, i) => {
                  return <option value={data._id}>
                    {data.course_name} ({data.mode})
                  </option>
                })
              }
            </select>
            <h6 className="mt-5">Select Employees</h6>
            <div>
              {/* <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {
                selectedfornewbatch.map((data,i)=>{
                  return  <tr>
                  <th scope="row">{i+1}</th>
                  <td>{data.name}</td>
                  <td>mayur@gmail.com</td>
                  
                  <td><button type="button"  value={data.id} onClick={(e)=>handleaddclickfornewbatch(e.target.value)} class="btn btn-success">+</button></td>
                </tr>
                })
              }
                
              
              </tbody>
            </table> */}
            </div>
            {/* <input
            type="text"
            class="form-control searchemployee"
            autoFocus
            placeholder="Search..."
          /> */}
            <div class="box" style={{ overflowX: "auto" }}>
              <table class="table  table-striped  table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {
                AllEmployees?.map((data,i)=>{
                  return  data.isSelected==true? <tr>
                  <th scope="row">{i+1}</th>
                  <td>{data.name}</td>
                  <td>mayur@gmail.com</td>
                  
                  <td><button type="button"  value={data.id} onClick={(e)=>handleaddclickfornewbatch(e.target.value)} class="btn btn-success">+</button></td>
                </tr>:null
                })
              } */}
                  {

                    AllEmployees.sort((a, b) => a.isSelected == true ? -1 : 1).map((data, i) => {
                      return <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{data.first_name} {data.last_name}</td>
                        <td>{data.email}</td>
                        <td>
                          {
                            data.isSelected ? <button type="button" class="btn btn-outline-danger btn-lg" value={data._id} onClick={(e) => handleremoveclickfornewbatch(e.target.value)}>-</button> : <button type="button" class="btn btn-outline-success btn-lg" value={data._id} onClick={(e) => handleaddclickfornewbatch(e.target.value)}>+</button>
                            // !data.isSelected && <button value={data.id} onClick={(e)=>handleaddclickfornewbatch(e.target.value)}>{data.name}</button>
                          }
                        </td>
                        {/* <td><button type="button"  value={data.id} onClick={(e)=>handleaddclickfornewbatch(e.target.value)} class="btn btn-success">+</button></td> */}
                      </tr>
                    })
                  }
                  {/* <tr>
                  <th scope="row">1</th>
                  <td>Mayur</td>
                  <td>mayur@gmail.com</td>
                  
                  <td><button type="button"  onClick={handleaddclickfornewbatch} class="btn btn-success">+</button></td>
                </tr> */}

                </tbody>
              </table>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Batch;
