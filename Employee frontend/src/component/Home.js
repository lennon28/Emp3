import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BranchService from "../Service/Service";

function Home() {
  const nav = useNavigate();
  const [branchName, setBranchName] = useState([]);
  const[selectBranch,setSelectBranch] = useState("")
  useEffect(() => {
    BranchService.getBranch().then((res) => {
      setBranchName(res);
    });
  }, []);

  console.log(branchName);
  const handlesubmit = () => {
    selectBranch === "--select Branch--" ?  <h3>Enter Branch name</h3> : nav("/addemployee");
  };
  return (
    <div class="container" style={{}}>
      <form id="myForm" class="needs-validation" novalidate>
        <div class="row">
          <div class="form-group col">
            <label for="branchName">Branch Name:</label>
            {/* <input type="text" class="form-control" id="branchName" placeholder="Enter branch name" onChange={(e)=>setBranchName(e.target.value)} required/> */}

            <select value={selectBranch} onChange={(e=>setSelectBranch(e.target.value))}> 
              <option>--select Branch--</option>
              {branchName.map((item) => {
                return (
                  <option key={item.branch_CODE}>{item.branch_NAME}</option>
                );
              })}
            </select>
          </div>
          <div class="form-group col">
            <label for="empCode">Emp Code:</label>
            <input
              type="text"
              class="form-control"
              id="empCode"
              placeholder="Enter employee code"
              required
            />
          </div>
          <div class="form-group col">
            <label for="empName">Emp Name:</label>
            <input
              type="text"
              class="form-control"
              id="empName"
              placeholder="Enter employee name"
              required
            />
          </div>
          <div class="form-group col">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handlesubmit}
            >
              GO
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
