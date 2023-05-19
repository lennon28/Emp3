import "bootstrap/dist/css/bootstrap.css";
import "./Add.css"
// import "./employee.css"
import React, { useEffect, useState } from "react";
import EmployeeService from "../Service/Service";

function Address(props) {

    const  [data, setdata] =  useState([])
    const  [countryid, setcountryid] =  useState()
    const  [states, setstates] =  useState([])
    const  [stateid, setstateid] =  useState()
    const  [City, setCity] =  useState([])
    const  [Cityid,setcityid] = useState()
    const  [location,setlocation]=useState([])
    const  [locid,setlocid] = useState()
    const  [locname,setlocname] =useState({})
    
    

    useEffect(()=>{
      EmployeeService.getCountry().then(res=>setdata(res))
     },[])
     
   
      useEffect(()=>{
     if(countryid){
      EmployeeService.getStateById(countryid).then(res=>setstates(res))
     }
     
       },[countryid])
   
       useEffect(()=>{
           if(stateid){
            EmployeeService.getCityById(stateid).then(res=>setCity(res))
           }
           
             },[stateid])
  
             useEffect(()=>{
              if(Cityid){
               EmployeeService.getLocationById(Cityid).then(res=>setlocation(res))
              }
              
                },[Cityid])
          useEffect(()=>{
            if(locid){
            
              EmployeeService.getLocationByLocationId(locid).then(res=>{setlocname(res) ;})
            }
              
            
          },[locid])

   console.log(locname)
             
   
   const hanleselect1=(e)=>{
      setcountryid(e.target.value)
      setstates([])
      setCity([])
   }
   const hanleselect2=(e)=>{
       setstateid(e.target.value)
       setCity([])
    }
    const hanleselect3=(e)=>{
      setcityid(e.target.value)
      setlocation([])
   }
 
   
 
  
       

    return (

        <div class="container">
          <div class="row">
            <div class="col-md-6">
              {/* <form onSubmit={}> */}
              <div class="panel panel-default">
                {/* <div class="panel-heading"><b>Address Preview</b></div> */}
                <div class="panel-body">
                  <div className="form-group">
                    <label for="address1">Address1</label>
                    <input type="text" className="form-control" id="em_ADDRESS1" onChange={props.handlechange} />
                  </div>
                  <div className="">
                    <label for="address2">Address2</label>
                    <input type="text" className="form-control" id="em_ADDRESS2" onChange={props.handlechange} />
                  </div>
                  <div className="">
                    <label for="address3">Address3</label>
                    <input type="text" className="form-control" id="em_ADDRESS3" onChange={props.handlechange} />
                  </div>
                  <div className="">
                    <label for="country">Country</label>
                    <select className="form-select" id="country" onChange={hanleselect1}>
                      <option>-- Select Country --</option>
                      {data.map(c => (
                        <option value={c.countryid}>{c.countryname}</option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <label for="state">State</label>
                    <select className="form-select" id="state" onChange={hanleselect2}>
                      <option>-- Select State --</option>
                      {states.map(s => (
                        <option value={s.stateid}>{s.statename}</option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <label for="city">City</label>
                    <select className="form-control" id="city" onChange={hanleselect3}>
                      <option>-- Select City --</option>
                      {City.map(c => (
                        <option value={c.cityid}>{c.cityname}</option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <label for="location">Location</label>
                    <select className="form-control" id="location" onChange={(e)=>{ props.handlelocation(e) ; setlocid(e.target.value)}}>
                      <option>--SELECT--</option>
                      {location.map(l => (
                        <option value={l.locationid}>{l.locationname}</option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="pincode">Pin Code:</label>
                   
                    <input type="text" class="form-control" id="pincode" placeholder="Enter pin code"  onChange={props.handlechange}  />
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <div className="mm"> 
              <h2>Address Preview </h2>
              </div>
            <div className="">
            
      

      <p>Address1 : {props.Addresprev1}</p>
      <p>Address2 : {props.Addresprev2}</p>
      <p>Address3 : {props.Addresprev3}</p><br />
      <p>State : {locname.city && locname.city.state.country.countryname}</p><br />
      <p>State : {locname.city && locname.city.state.statename}</p><br />
      <p>City : {locname.city && locname.city.cityname}</p><br />
      <p>location : {locname.locationname}</p><br />
      <p>Pincode : {props.Pinco}</p>
      <p></p>

      {/* Additional elements or logic */}
    </div>



            <div class="col-md-6">



        </div>
      </div>
    </div>

            </div>
    
    )
  }

export default Address


