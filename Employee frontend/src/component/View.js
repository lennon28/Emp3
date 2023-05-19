
import React, { useEffect, useState } from "react";
import EmployeeService from "../Service/Service";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function View() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);


  useEffect(() => {
    EmployeeService.getEmployee().then(res => setData(res));
  }, []);

  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    setSelectedData(null);
  };

  const handleFetchData = () => {
    if (selectedId) {
      EmployeeService.getEmployeeByCode(selectedId).then(res => setSelectedData(res));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

//   const handleStatus = () => {
//     if (selectedData && selectedData.residentialCode === 1) {
//       return "Indian Resident";
//     } else {
//       return "Non-Indian Resident";
//     }
//   };

  // const handleCheck = () => {
  //   if (selectedData && selectedData.entityLifeBlockRecordId === 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div>
      <Header/>
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          {/* <button className="btn btn-secondary float-end" onClick={handleSubmit}>
            Exit
          </button> */}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <select id="employeeCode" className="form-select" onChange={handleSelect} required>
                <option>-- Select Employee Code --</option>
                {data.map(c => (
                  <option key={c.em_EMPLOYEE_CODE} value={c.em_EMPLOYEE_CODE}>
                    {c.em_EMPLOYEE_CODE}
                  </option>
                ))}
              </select>
        </div>
        <div className="col-6">
          <button className="btn btn-primary" onClick={handleFetchData}>
            Fetch Data
          </button>
        </div>
      </div>
      {selectedData && (
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex justify-content-start">
              <button
                className={`btn btn-link ${!tab1 && !tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(false);
                  setTab2(false);
                  setTab3(false);
                }}
              >
                EMPLOYEE INFO
              </button>
              <button
                className={`btn btn-link ${tab1 && tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(true);
                  setTab2(true);
                  setTab3(false);
                }}
              >
          ADDRESS INFO
              </button>
              <button
                className={`btn btn-link ${tab1 && !tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(true);
                  setTab2(false);
                  setTab3(false);
                }}
              >
                CONTACT INFO
              </button>
             
              <button
                className={`btn btn-link ${!tab1 && tab2 ? "active" : ""}`}
                onClick={() => {
                  setTab1(false);
                  setTab2(true);
                  setTab3(false);
                }}
              >
                BANK INFO
              </button>



              <button
                className={`btn btn-link ${!tab3 && !tab4 ? "active" : ""}`}
                onClick={() => {
                   
                    setTab4(true);
                  setTab3(true);
                 
                }}
              >
                ROLE INFO
              </button>
              <button
                className={`btn btn-link ${tab3 && tab4 ? "active" : ""}`}
                onClick={() => {
                  setTab3(true);
                  setTab4(false);
                }}
              >
              MOBILE REGISTRATION
              </button>

            
            </div>
            <div className="card">
              <div div className="card-header">
                
                {!tab1 && !tab2 && !tab3&& 
                <div>
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Employee Info</h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>Branch:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.branchBean.branch_NAME}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>Employee Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.em_NAME_INFO}
                            readOnly
                          />
                        </div> 
                        <div className="form-group">
                          <label>Start Date:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.em_START_DATE}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>End Date:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.em_END_DATE}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label>Status:</label>
                          <input type="checkbox" checked readOnly />
                        </div>
                        {/* <div className="form-group">
                          <label>Life Cover Block:</label>
                          <input
                            type="checkbox"
                            checked={handleCheck()}
                            readOnly
                          />
                        </div> */}
                      </div>{" "}
                      {/* <div className="col-6"> */}
                        {/* <div className="form-group">
                          <label>Constitution:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.constitution.constitutionName}
                            readOnly
                          />
                        </div> */}
                        {/* <div className="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.name}
                            readOnly
                          />
                        </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>}
                

                {tab1 && tab2 && !tab3 && (
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Address Info</h4>

                    <div className="col-6">
                      {/* <div className="form-group">
                        <label>Address Type:</label>
                        <input
                          type="text"
                          className="form-control"
                          value="PERMANENT ADDRESS"
                          disabled
                        />
                      </div> */}
                      <div className="form-group">
                        <label>Address1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.em_ADDRESS1}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Address2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.em_ADDRESS2}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Address3:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.em_ADDRESS3}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Country:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.location?.city?.state?.country?.countryname || ''}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>State:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.location?.city?.state?.statename || ''}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>City:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.location?.city?.cityname || ''}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Location:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.location?.locationname || ''}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Pin Code:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.pincode}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {tab1 && !tab2 && !tab3 && (
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Contact Info</h4>


                    <div className="form-group">
                        <label>Mobile:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.mobile_NO}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Email ID:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.email_ID}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Website:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.website}
                          readOnly
                        />
                      </div>
                    
                  </div>
                )}
              
              

              {!tab1 && tab2  && !tab3&& 
              <div >
                <div className="EI" style={{ color: "blue" }}>
                  <h4>Primary Bank Details</h4>

                      <div className="form-group">
                        <label>Beneficiary name 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.beneficiary_NAME_1}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Branch 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.bank_BRANCH_1}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>IFSC Code 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.ifsc_CODE_1}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Name of the Bank:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.bank_NAME_1}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Account No 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.account_NO_1}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Account Type 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.account_TYPE_1}
                          readOnly
                        />
                      </div>

                      <div className="EI" style={{ color: "blue" }}>
                  <h4>Secondary Bank Details</h4>


                  <div className="form-group">
                        <label>Beneficiary name 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.beneficiary_NAME_2}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Branch 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.bank_BRANCH_2}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>IFSC Code 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.ifsc_CODE_2}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Name of the Bank 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.bank_NAME_2}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Account No 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.account_NO_2}
                          readOnly
                        />
                      </div>

                      <div className="form-group">
                        <label>Bank Account Type 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.bankBean.account_TYPE_2}
                          readOnly
                        />
                      </div>
                      </div>  
                </div>
              </div>} 
        
            
            

        {tab4 && tab3 &&  (
                <div className="EI" style={{ color: "blue" }}>
                    <h4> Role Info</h4>

                    <div className="form-group">
                        <label>Role Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.roleBean && selectedData.roleBean.role_NAME}
                          readOnly
                        />
                        </div> 
                    </div> 
                    
            )} 
        

            {tab3 && !tab4 && (
                  <div className="EI" style={{ color: "blue" }}>
                    <h4>Mobile Registrataion</h4>
                    <div className="form-group">
                        <label>IMEI NO1:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.imei_NO1}
                          readOnly
                        />
                        </div> 
                        <div className="form-group">
                        <label>IMEI NO2:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedData.imei_NO2}
                          readOnly
                        />
                        </div> 
                    </div>
            )}
          
          
          </div>
            </div>
                             
           
          </div>

    
          <div className="card-footer">
              <button className="btn btn-secondary" onClick={handleSubmit}>
                Go Back
              </button>
            </div>
        </div>
      )}
    </div>
    </div>
  );
}
export default View;
