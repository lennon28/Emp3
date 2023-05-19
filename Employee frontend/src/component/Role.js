import React, { useEffect, useState } from 'react'
import EmployeeService from "../Service/Service";

function Role(props) {
  const [roles, setRoles] = useState([{ roleCode: '', status: false }]);
  
  const [RoleName, setRoleName] = useState([])

  const handleChange = (index, event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    const newRoles = [...roles];
    newRoles[index] = { ...newRoles[index], [name]: value };
    setRoles(newRoles);
  };

  useEffect(() => {
    EmployeeService.getRole().then(res => setRoleName(res))
  }, [])

  return (
    <div className='AD'>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Role Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <select className="form-select" id="roleBean" onChange={props.handlerole} disabled={role.status}>
                  <option>-- Select --</option>
                  {RoleName.map(c => (
                    <option value={c.role_CODE}>{c.role_NAME}</option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="status"
                  checked={role.status}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Role;
