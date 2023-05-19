
import "bootstrap/dist/css/bootstrap.css";
import "./employee.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeService from "../Service/Service";
import Address from "./Address";
import Contact from "./Contact";
import Bank from "./Bank";
import Role from "./Role";
import Mobile from "./Mobile";
import "./Tabs.css" 
import Header from "./Header";
import ButtonGroup from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function AddEmployee() {

  const [toggleState, setToggleState] = useState(1);
  const[  bankdetails,setbankdetails] = useState({})
  const[go  ,setgo] = useState(false)
  const[button  ,setbutton] = useState(false)
  
  

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const nav = useNavigate();

  const [Employee, setEmployee] = useState(
  {
      bankBean :{
        beneficiary_NAME_1 : "",

      },
      branchBean: {
        branch_CODE: "",
        branch_NAME: ""
      },
      em_TXN_ID: "",
      em_NAME_INFO: "",
      em_START_DATE:  new Date().toISOString().slice(0, 10),
      em_END_DATE:  "2055-11-25",
      imei_NO2: "",
      imei_NO1: "",
      em_STATUS_IND: "yes",
      em_EMPLOYEE_CODE: ""
  }
  );
 
  
  
  
  const [branchName, setBranchName] = useState([]);

  const[locationid,setlocationid] = useState()
  const[roleid,setroleid] = useState()
  const  [branchid, setbranchid] =  useState()
 
  


useEffect(() => {
  EmployeeService.getBranch().then((res) => {
    setBranchName(res);
  });
}, []);

useEffect(() => {
  if(branchid){
    EmployeeService.getBranchbycode(branchid).then((res) => setEmployee({
      ...Employee ,
      branchBean: {
        branch_CODE: res.branch_CODE,
        branch_NAME: res.branch_NAME,
      }
      
    })  ,
    setgo(true)
  );
  
 
}}, [branchid]);

useEffect(() => {
if(locationid){

EmployeeService.getLocationByLocationId(locationid).then(res=>{
  setEmployee({...Employee,location: (res)})
})
}

  }, [locationid]);


  useEffect(() => {
    if(roleid){
    
    EmployeeService. getRolebycode(roleid).then(res=>{
      setEmployee({...Employee,roleBean: (res)})
    
    
    })
    }
    
      }, [roleid]);

      
  
 const hanleselect4=(e)=>{
  setbranchid(e.target.value)
}

 const handlechange=(e)=>{
  setEmployee({...Employee,[e.target.id]:(e.target.value)})
 }
 
 
  const handleSubmit = () => {
 
   
  
    console.log(Employee);

  
    EmployeeService.postEmployee(Employee).then(res => alert("Added"));
  };
 
 
  const handlestus = (e) => {
    if (e.target.checked) {
      setEmployee({
        ...Employee,
        [e.target.id]: "yes",
        em_END_DATE: "2055-11-25" // Set the fixed end date
      });
    } else {
      setEmployee({
        ...Employee,
        [e.target.id]: "No",
        em_END_DATE: new Date().toISOString().slice(0, 10) // Set the current date
      });
    }
  };
  

const handlelocation =(e)=>{
 setlocationid(e.target.value)
}
// console.log()

const handledetails=(e)=>{
  setEmployee({...Employee,bankBean: {...(Employee.bankBean) ,[e.target.id]: (e.target.value)}})
}
console.log(bankdetails)
const handlerole =(e)=>{
  setroleid(e.target.value)
}



  return (
  
     <div className=" ss">
        <Header/>
        <br/>
       <ButtonGroup handleSubmit={handleSubmit} />
       <br></br>
       
    <div class="Sd">
       
      <div class="row">
  <div class="form-group col">
    <label for="branchName">Branch Name:</label>
    {/* <input type="text" class="form-control" id="branchName" placeholder="Enter branch name" /> */}
    <select  onChange={hanleselect4} disabled={go && button}> 
              <option></option>
              {branchName.map((item) => {
                return (
                  <option value={item.branch_CODE}>{item.branch_NAME}</option>
                );
              })}
            </select>
  </div>
  <div class="form-group col">

    <label for="empCode">Emp Code:</label>
 
    <input type="text" class="form-control" id="em_EMPLOYEE_CODE" placeholder="Enter employee code" onChange={handlechange} disabled={go && button}/>
  </div>
  <div class="form-group col">
    <label for="empName">Emp Name:</label>
    <input type="text" class="form-control" id="em_NAME_INFO" placeholder="Enter employee name"  onChange={handlechange} disabled={go && button}/>
  </div>
  
  <div class="form-group col">
  <button className="go-button" onClick={()=>{setbutton(true)}}>
      <FontAwesomeIcon icon={faArrowRight} />
      Go
    </button>
    </div>


</div>
{go && button && <div>

<div>
<div class="form-row">
  <div class="col-md-4 form-group">
    <label for="startDate">Start Date:</label>
    <input type="date"   class="form-control"   id="em_START_DATE" value={Employee.em_START_DATE} onChange={handlechange}  disabled/>
  </div>
  <div class="col-md-4 form-group">
    <label for="endDate">End Date:</label>
    <input type="date" class="form-control"  id="em_END_DATE"   value={Employee.em_END_DATE} onChange={handlechange}  disabled />
  </div>
  <div class="col-md-4 form-group">
    <label for="status">Status:</label>
    <div class="checkbox">
      <label><input type="checkbox" id="em_STATUS_IND" checked={Employee.em_STATUS_IND === "yes"} onChange={handlestus}/></label>
    </div>
  </div>
  
</div>
<div>
     
      </div>
      <div className="kk">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Address
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Contact Info
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Bank Info
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Role Info
          </button>

          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Mobile Registration 
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2></h2>
            
            <Address handlechange={handlechange} handlelocation={handlelocation} Addresprev1={Employee.em_ADDRESS1}
            Addresprev2={Employee.em_ADDRESS2}
            Addresprev3={Employee.em_ADDRESS3}
            locations = {locationid}
            Pinco={Employee.pincode}
            />
            
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            
            <Contact handlechange={handlechange}/>
          
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2></h2>
            

            <Bank  handledetails={handledetails}/>
             
          </div>
      
         <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            
            <Role handlechange={handlechange} handlerole={handlerole}/>
           
           
           
          </div>


          <div
            className={toggleState === 5 ? "content  active-content" : "content"}
          >
           
            <Mobile handlechange={handlechange}/>
             
              
          </div>
  
          
        </div>
      </div>
  </div>

  </div> }




        









   </div>  
  
</div>

            
    
  )
}

export default AddEmployee
