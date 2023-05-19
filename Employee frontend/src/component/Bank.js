import React, { useEffect, useState } from 'react';
import './Bank.css';
import EmployeeService from '../Service/Service';

function Bank(props) {
  const [branch, setBranch] = useState([]);

  

  const handleSelectedBank2Change = (event) => {
    if (event.target.checked) {
      document.getElementById('beneficiary_NAME_2').value = document.getElementById('beneficiary_NAME_1').value;
      document.getElementById('bank_BRANCH_2').value = document.getElementById('bank_BRANCH_1').value;
      document.getElementById('ifsc_CODE_2').value = document.getElementById('ifsc_CODE_1').value;
      document.getElementById('bank_NAME_2').value = document.getElementById('bank_NAME_1').value;
      document.getElementById('account_NO_2').value = document.getElementById('account_NO_1').value;
      document.getElementById('account_TYPE_2').value = document.getElementById('account_TYPE_1').value;
    } else {
      document.getElementById('beneficiary_NAME_2').value = '';
      document.getElementById('bank_BRANCH_2').value = '';
      document.getElementById('ifsc_CODE_2').value = '';
      document.getElementById('bank_NAME_2').value = '';
      document.getElementById('account_NO_2').value = '';
      document.getElementById('account_TYPE_2').value = 'Savings';
    }
  };
  useEffect(() => {
    EmployeeService.getBranchName().then(res => setBranch(res));
  }, []);
  return (
    <div>
      <div>
        <h3>Primary Bank Details</h3>
      </div>

      <div className="checkbox">
        <label htmlFor="SelectedBank1">Selected Bank 1</label>
        <input type="checkbox" id="SelectedBank1" onChange={handleSelectedBank2Change} />
      </div>

      <div className="form-flex">
        <div className="column">
          <div className="form-group">
            <label htmlFor="Benname1">Beneficiary Name 1</label>
            <input type="text" className="form-control" id="beneficiary_NAME_1" onChange={props.handledetails} />
          </div>
          <div className="form-group">
            <label htmlFor="BankBranch1">Bank Branch 1</label>
            <select id="bank_BRANCH_1" onChange={props.handledetails}>
              <option>--Select--</option>
              {branch.map(b => {
                return <option key={b.branchname} value={b.branchname}>{b.branchname}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="IFSCcode1">IFSC Code 1:</label>
            <input type="text" className="form-control" id="ifsc_CODE_1" onChange={props.handledetails} />
          </div>
        </div>
        <div className="column">
          <div className="form-group">
            <label htmlFor="NameoftheBank1">Name of the Bank 1:</label>
            <input type="text" className="form-control" id="bank_NAME_1" onChange={props.handledetails} />
          </div>
          <div className="form-group">
            <label htmlFor="BankAccountNumber1">Bank Account Number 1:</label>
            <input type="text" className="form-control" id="account_NO_1" onChange={props.handledetails} />
          </div>
          <div className="form-group">
            <label htmlFor="BankAccountType1">Bank Account Type 1:</label>
            <select id="account_TYPE_1" onChange={props.handledetails}>
            <option >Select</option>
  <option value="Savings">Savings</option>
  <option value="Current">Current</option>
  <option value="Other">Other</option>
</select>
          </div>
        </div>
      </div>
      <div>
    <h3>Secondary Bank Details</h3>
  </div>

  <div className="checkbox">
    <label htmlFor="SelectedBank2">Selected Bank 2</label>
    <input type="checkbox" id="SelectedBank2" onChange={handleSelectedBank2Change} />
  </div>

  <div className="form-flex">
    <div className="column">
      <div className="form-group">
        <label htmlFor="Benname2">Beneficiary Name 2</label>
        <input type="text" className="form-control" id="beneficiary_NAME_2" onChange={props.handledetails} />
      </div>
      <div className="form-group">
        <label htmlFor="BankBranch2">Bank Branch 2</label>
        <select id="bank_BRANCH_2" onChange={props.handledetails}>
          <option>--Select--</option>
          {branch.map(b => {
            return <option key={b.branchname} value={b.branchname}>{b.branchname}</option>;
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="IFSCcode2">IFSC Code 2:</label>
        <input type="text" className="form-control" id="ifsc_CODE_2" onChange={props.handledetails} />
      </div>
    </div>
    <div className="column">
      <div className="form-group">
        <label htmlFor="NameoftheBank2">Name of the Bank 2:</label>
        <input type="text" className="form-control" id="bank_NAME_2" onChange={props.handledetails} />
      </div>
      <div className="form-group">
        <label htmlFor="BankAccountNumber2">Bank Account Number 2:</label>
        <input type="text" className="form-control" id="account_NO_2" onChange={props.handledetails} />
      </div>
      <div className="form-group">
        <label htmlFor="BankAccountType2">Bank Account Type 2:</label>
        <select id="account_TYPE_2" onChange={props.handledetails}>
          <option >Select</option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  </div>
</div>

);
}

export default Bank;