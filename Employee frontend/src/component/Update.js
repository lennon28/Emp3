import React, { useEffect, useState } from 'react';
import EmployeeService from "../Service/Service";
import { useNavigate } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [updatedData, setUpdatedData] = useState(null);

  useEffect(() => {
    EmployeeService.getEmployee().then(res => setData(res));
  }, []);

  const handleSelect = e => {
    setSelectedId(e.target.value);
    setSelectedData(null);
  };

  const handleFetchData = () => {
    if (selectedId) {
      EmployeeService.getEmployeeByCode(selectedId).then(res => setSelectedData(res));
    }
  };
  console.log(selectedData)  
  const handleUpdateData = () => {
    console.log(selectedData)  
 
 if (selectedData) {
      EmployeeService.putEmployee(selectedData)
        .then(res => {
         alert(res)
         setSelectedData(null)
        })
        .catch(error => {
          console.error("Error updating employee data:", error);
        });
    }
  };
  

  const handleSubmit = e => {
    navigate("/");
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSelectedData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <button className="btn btn-secondary mb-3" onClick={handleSubmit}>Exit</button>
          <form>
          <div className="mb-3">
              <label htmlFor="employeeCode" className="form-label">EMPLOYEE CODE:</label>
              <select id="employeeCode" className="form-select" onChange={handleSelect} required>
                <option>-- Select Employee Code --</option>
                {data.map(c => (
                  <option key={c.em_EMPLOYEE_CODE} value={c.em_EMPLOYEE_CODE}>
                    {c.em_EMPLOYEE_CODE}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary" type="button" onClick={handleFetchData}>
              Fetch Data
            </button>
          </form>
          {selectedData && (
            <div className="mt-4">
              <h3>Employee Details</h3>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">EMPLOYEE NAME:</label>
                    <input type="text" className="form-control" name="em_NAME_INFO" value={selectedData.em_NAME_INFO} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">BRANCH NAME:</label>
                    <input type="text" className="form-control" name="branchBean.branch_NAME" value={selectedData.branchBean.branch_NAME} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">START DATE:</label>
                    <input type="text" className="form-control" name="em_START_DATE" value={selectedData.em_START_DATE} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">END DATE:</label>
                    <input type="text" className="form-control" name="em_END_DATE" value={selectedData.em_END_DATE} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">MOBILE NO:</label>
                    <input type="text" className="form-control" name="mobile_NO" value={selectedData.mobile_NO} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">EMAIL:</label>
                    <input type="text" className="form-control" name="email_ID" value={selectedData.email_ID} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">WEBSITE:</label>
                    <input type="text" className="form-control" name="website" value={selectedData.website} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ROLE NAME:</label>
                    <input type="text" className="form-control" name="roleBean.role_NAME" value={selectedData.roleBean && selectedData.roleBean.role_NAME} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">

                        <label className="form-label">ADDRESS 1:</label>
                    <input type="text" className="form-control" name="em_ADDRESS1" value={selectedData.em_ADDRESS1} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ADDRESS 2:</label>
                    <input type="text" className="form-control" name="em_ADDRESS2" value={selectedData.em_ADDRESS2} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ADDRESS 3:</label>
                    <input type="text" className="form-control" name="em_ADDRESS3" value={selectedData.em_ADDRESS3} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">COUNTRY:</label>
                    <input type="text" className="form-control" name="location.city.state.country.countryname" value={selectedData.location?.city?.state?.country?.countryname || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">STATE:</label>
                    <input type="text" className="form-control" name="location.city.state.statename" value={selectedData.location?.city?.state?.statename || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CITY:</label>
                    <input type="text" className="form-control" name="location.city.cityname" value={selectedData.location?.city?.cityname || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">LOCATION:</label>
                    <input type="text" className="form-control" name="location.locationname" value={selectedData.location?.locationname || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">PINCODE:</label>
                    <input type="text" className="form-control" name="pincode" value={selectedData.pincode} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleUpdateData}>
                Update
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export default Update;

