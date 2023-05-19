
import React, { useEffect, useState } from "react";
import EmployeeService from "../Service/Service";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { text } from "@fortawesome/fontawesome-svg-core";

function Modify() {
  const navigate = useNavigate();
  const  [data1, setdata1] =  useState([])
    const  [countryid, setcountryid] =  useState()
    const  [states, setstates] =  useState([])
    const  [stateid, setstateid] =  useState()
    const  [City, setCity] =  useState([])
    const  [Cityid,setcityid] = useState()
    const  [location,setlocation]=useState([])
    const[locationid,setlocationid] = useState()


  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [branch, setBranch] = useState([]);
  const [RoleName, setRoleName] = useState([])
  const[roleid,setroleid] = useState()
  // const [Employee, setEmployee] = useState({})



  useEffect(() => {
    EmployeeService.getEmployee().then(res => setData(res));
  }, []);

  useEffect(() => {
    EmployeeService.getBranchName().then(res => setBranch(res));
  }, []);

  useEffect(() => {
    EmployeeService.getRole().then(res => setRoleName(res))
  }, [])

  useEffect(() => {
    if(roleid){
    
    EmployeeService. getRolebycode(roleid).then(res=>{
      setSelectedData({...selectedData,roleBean: (res)})
    
    
    })
    }
    
      }, [roleid]);

// --------------------------------------------------------

useEffect(()=>{
  EmployeeService.getCountry().then(res=>setdata1(res))
 },[])
 
 useEffect(() => {
  if(countryid){
  
  EmployeeService. getStateById(countryid).then(res=>{
    setSelectedData({...selectedData,country: (res)})
  
  
  })
  }
  
    }, [countryid]);


//   useEffect(()=>{
//  if(countryid){
//   EmployeeService.getStateById(countryid).then(res=>setstates(res))
//  }
 
//    },[countryid])

useEffect(() => {
  if(stateid){
  
  EmployeeService. getCityById(stateid).then(res=>{
    setSelectedData({...selectedData,state: (res)})
  
  
  })
  }
  
    }, [stateid]);



  //  useEffect(()=>{
  //      if(stateid){
  //       EmployeeService.getCityById(stateid).then(res=>setCity(res))
  //      }
       
  //        },[stateid])


  useEffect(() => {
    if(Cityid){
    
    EmployeeService. getLocationById(Cityid).then(res=>{
      setSelectedData({...selectedData,city: (res)})
    
    
    })
    }
    
      }, [Cityid]);

        //  useEffect(()=>{
        //   if(Cityid){
        //    EmployeeService.getLocationById(Cityid).then(res=>setlocation(res))
        //   }
          
        //     },[Cityid])


        useEffect(() => {
          if(locationid){
          
          EmployeeService. getLocationByLocationId(locationid).then(res=>{
            setSelectedData({...selectedData,location: (res)})
          
          
          })
          }
          
            }, [locationid]);

            // useEffect(() => {
            //   if(locationid){
              
            //   EmployeeService.getLocationByLocationId(locationid).then(res=>{
            //     setSelectedData({...selectedData,location: (res)})
            //   })
            //   }
              
            //     }, [locationid]);

                const hanleselect1=(e)=>{
                  setcountryid(e.target.value)
                  setstates([])
                  setCity([])
                  setSelectedData({...selectedData,country: {...(selectedData.country),[e.target.name]: (e.target.value)}})
               }
               const hanleselect2=(e)=>{
                   setstateid(e.target.value)
                   setCity([])
                   setSelectedData({...selectedData,state: {...(selectedData.state),[e.target.name]: (e.target.value)}})
               
                }
                const hanleselect3=(e)=>{
                  setcityid(e.target.value)
                  setlocation([])
                  setSelectedData({...selectedData,city: {...(selectedData.city),[e.target.name]: (e.target.value)}})
               }

               const handlelocation =(e)=>{
                setlocationid(e.target.value)
                setSelectedData({...selectedData,location: {...(selectedData.location),[e.target.name]: (e.target.value)}})
               }







  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    setSelectedData(null);
  };
const reload=() => {
  setTab1(false)
      setTab2(false)
      setTab3(false)
      setTab4(false)
}

  const handleFetchData = () => {
    
 
    if (selectedId) {
      EmployeeService.getEmployeeByCode(selectedId).then(res => {
        setSelectedData(res)
      })
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };


  // const handleCheck = () => {
  //   if (selectedData && selectedData.entityLifeBlockRecordId === 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };


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

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSelectedData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handledetails=(e)=>{
    setSelectedData({...selectedData,bankBean: {...(selectedData.bankBean) ,[e.target.name]: (e.target.value)}})
  }

  const handlerole =(e)=>{
    setroleid(e.target.value)
    setSelectedData({...selectedData,roleBean: {...(selectedData.roleBean),[e.target.name]: (e.target.value)}})
  }

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
          <button className="btn btn-primary" onClick={()=>{ 
            setTab1(false)
      setTab2(false)
      setTab3(false)
      setTab4(false) ;handleFetchData()}}>
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
                  <div className="EI" style={{ color: "black" }}>
                    <h4>Employee Info</h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>Branch:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedData.branchBean.branch_NAME}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Employee Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="em_NAME_INFO"
                            defaultValue={selectedData.em_NAME_INFO}
                            onChange={handleInputChange}
                          />
                        </div> 
                        <div className="form-group">
                          <label>Start Date:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="em_START_DATE"
                            defaultValue={selectedData.em_START_DATE}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>End Date:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="em_END_DATE"
                            defaultValue={selectedData.em_END_DATE}
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                          />
                        </div> */}
                      </div>
                      
                    </div>
                  </div>
                </div>}
                

                {tab1 && tab2 && !tab3 && (
                  <div className="EI" style={{ color: "black" }}>
                    <h4>Address Info</h4>

                    <div className="col-6">
                
                      <div className="form-group">
                        <label>Address1:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="em_ADDRESS1"
                          defaultValue={selectedData.em_ADDRESS1}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address2:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="em_ADDRESS2"
                          defaultValue={selectedData.em_ADDRESS2}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address3:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="em_ADDRESS3"
                          defaultValue={selectedData.em_ADDRESS3}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Country:</label>
                        <select className="form-select" name="countryname"  defaultValue={selectedData.location?.city?.state?.country?.countryname || ''} onChange={hanleselect1}>
                      <option>-- Select Country --</option>
                      {data1.map(c => (
                        <option value={c.countryid}>{c.countryname}</option>
                      ))}
                    </select>
                      </div>
                      <div className="form-group">
                        <label>State:</label>
                        <select className="form-select" name="statename" defaultValue={selectedData.location?.city?.state?.statename || ''}
 onChange={hanleselect2}>
                      <option>-- Select State --</option>
                      {states.map(s => (
                        <option value={s.stateid}>{s.statename}</option>
                      ))}
                    </select>
                      </div>
                      <div className="form-group">
                        <label>City:</label>
                        <select className="form-control" name="cityname"  defaultValue={selectedData.location?.city?.cityname || ''}
 onChange={hanleselect3}>
                      <option>-- Select City --</option>
                      {City.map(c => (
                        <option value={c.cityid}>{c.cityname}</option>
                      ))}
                    </select>
                      </div>
                      <div className="form-group">
                        <label>Location:</label>
                        <select className="form-control" name="locationname " defaultValue={selectedData.location?.locationname || ''} onChange={handlelocation}>
                      <option>--SELECT--</option>
                      {location.map(l => (
                        <option value={l.locationid}>{l.locationname}</option>
                      ))}
                    </select>
                      </div>
                      <div className="form-group">
                        <label>Pin Code:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          defaultValue={selectedData.pincode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {tab1 && !tab2 && !tab3 && (
                  <div className="EI" style={{ color: "black" }}>
                    <h4>Contact Info</h4>


                    <div className="form-group">
                        <label>Mobile:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile_NO"
                          defaultValue={selectedData.mobile_NO}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email ID:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email_ID"
                          defaultValue={selectedData.email_ID}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Website:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          defaultValue={selectedData.website}
                          onChange={handleInputChange}
                        />
                      </div>
                    
                  </div>
                )}
              
              

              {!tab1 && tab2  && !tab3&& 
              <div >
                <div className="EI" style={{ color: "black" }}>
                  <h4>Primary Bank Details</h4>

                      <div className="form-group">
                        <label>Beneficiary name 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="beneficiary_NAME_1"
                          defaultValue={selectedData.bankBean.beneficiary_NAME_1}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Branch 1:</label>
                        <select name="bank_BRANCH_1"  value={selectedData.bankBean.bank_BRANCH_1} onChange={handledetails}>
              <option>--Select--</option>
              {branch.map(b => {
                return <option key={b.branchname} value={b.branchname}>{b.branchname}</option>;
              })}
            </select>
                      </div>
                      <div className="form-group">
                        <label>IFSC Code 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="ifsc_CODE_1"
                          defaultValue={selectedData.bankBean.ifsc_CODE_1}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Name of the Bank:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="bank_NAME_1"
                          defaultValue={selectedData.bankBean.bank_NAME_1}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Account No 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="account_NO_1"
                          defaultValue={selectedData.bankBean.account_NO_1}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Account Type 1:</label>
                        <select name="account_TYPE_1"  defaultValue={selectedData.bankBean.account_TYPE_1} onChange={handledetails}>
            <option >Select</option>
  <option value="Savings">Savings</option>
  <option value="Current">Current</option>
  <option value="Other">Other</option>
</select>
                      </div>

                      <div className="EI" style={{ color: "black" }}>
                  <h4>Secondary Bank Details</h4>


                  <div className="form-group">
                        <label>Beneficiary name 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="beneficiary_NAME_2"
                          defaultValue={selectedData.bankBean.beneficiary_NAME_2}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Branch 2:</label>
                        <select name="bank_BRANCH_2"  defaultValue={selectedData.bankBean.bank_BRANCH_2} onChange={handledetails}>
          <option>--Select--</option>
          {branch.map(b => {
            return <option key={b.branchname} value={b.branchname}>{b.branchname}</option>;
          })}
        </select>
                      </div>
                      <div className="form-group">
                        <label>IFSC Code 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="ifsc_CODE_2"
                          defaultValue={selectedData.bankBean.ifsc_CODE_2}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Name of the Bank 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="bank_NAME_2"
                          defaultValue={selectedData.bankBean.bank_NAME_2}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bank Account No 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="account_NO_2"
                          defaultValue={selectedData.bankBean.account_NO_2}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Bank Account Type 2:</label>
                        <select name="account_TYPE_2" defaultValue={selectedData.bankBean.account_TYPE_2} onChange={handledetails}>
          <option >Select</option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
          <option value="Other">Other</option>
        </select>
                      </div>
                      </div>  
                </div>
              </div>} 
        
            
            

        {tab4 && tab3 &&  (
                <div className="EI" style={{ color: "black" }}>
                    <h4> Role Info</h4>

                    <div className="form-group">
                        <label>Role Name:</label>
                        <select className="form-select" name="role_NAME" defaultValue={selectedData.roleBean && selectedData.roleBean.role_CODE} onChange={handlerole} >
                  <option>-- Select --</option>
                  {RoleName.map(c => (
                    <option value={c.role_CODE}>{c.role_NAME}</option>
                  ))}
                </select>
                        </div> 
                    </div> 
                    
            )} 
        

            {tab3 && !tab4 && (
                  <div className="EI" style={{ color: "black" }}>
                    <h4>Mobile Registrataion</h4>
                    <div className="form-group">
                        <label>IMEI NO1:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="imei_NO1"
                          defaultValue={selectedData.imei_NO1}
                          onChange={handleInputChange}
                        />
                        </div> 
                        <div className="form-group">
                        <label>IMEI NO2:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="imei_NO2"
                          defaultValue={selectedData.imei_NO2}
                          onChange={handleInputChange}
                        />
                        </div> 
                    </div>
            )}
          
          
          </div>
            </div>
                             
           
          </div>
          <div className="card-footer" style={{padding:"20px"}}>
              <button className="btn btn-secondary" onClick={handleSubmit}>
                Go Back
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-primary"onClick={handleUpdateData}>
                Update
              </button>
              </div>
            
            </div>
            
       
      )}
    </div>

    </div>
  );
}
export default Modify;
