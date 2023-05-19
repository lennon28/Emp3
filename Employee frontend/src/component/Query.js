import React, { useEffect, useState } from 'react';
import EmployeeService from "../Service/Service";
import { useNavigate } from 'react-router-dom';

function Query() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

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

  const handleSubmit = e => {
    navigate("/");
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
                    <input type="text" className="form-control" value={selectedData.em_NAME_INFO} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">BRANCH NAME:</label>
                    <input type="text" className="form-control" value={selectedData.branchBean.branch_NAME} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">START DATE:</label>
                    <input type="text" className="form-control" value={selectedData.em_START_DATE} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">END DATE:</label>
                    <input type="text" className="form-control" value={selectedData.em_END_DATE} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">MOBILE NO:</label>
                    <input type="text" className="form-control" value={selectedData.mobile_NO} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">EMAIL:</label>
                    <input type="text" className="form-control" value={selectedData.email_ID} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">WEBSITE:</label>
                    <input type="text" className="form-control" value={selectedData.website} readOnly />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ROLE NAME:</label>
<input type="text" className="form-control" value={selectedData.roleBean && selectedData.roleBean.role_NAME} readOnly />
</div>
<div className="mb-3">
<label className="form-label">ADDRESS 1:</label>
<input type="text" className="form-control" value={selectedData.em_ADDRESS1} readOnly />
</div>
<div className="mb-3">
<label className="form-label">ADDRESS 2:</label>
<input type="text" className="form-control" value={selectedData.em_ADDRESS2} readOnly />
</div>
<div className="mb-3">
<label className="form-label">ADDRESS 3:</label>
<input type="text" className="form-control" value={selectedData.em_ADDRESS3} readOnly />
</div>
<div className="mb-3">
<label className="form-label">COUNTRY:</label>
<input type="text" className="form-control" value={selectedData.location?.city?.state?.country?.countryname || ''} readOnly />
</div>
<div className="mb-3">
<label className="form-label">STATE:</label>
<input type="text" className="form-control" value={selectedData.location?.city?.state?.statename || ''} readOnly />
</div>
<div className="mb-3">
<label className="form-label">CITY:</label>
<input type="text" className="form-control" value={selectedData.location?.city?.cityname || ''} readOnly />
</div>
<div className="mb-3">
<label className="form-label">LOCATION:</label>
<input type="text" className="form-control" value={selectedData.location?.locationname || ''} readOnly />
</div>
<div className="mb-3">
<label className="form-label">PINCODE:</label>
<input type="text" className="form-control" value={selectedData.pincode} readOnly />
</div>
</div>
</div>
</div>
)}
</div>
</div>
</div>
);
}

export default Query;
