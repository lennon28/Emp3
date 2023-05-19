import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header';

function First() {
    const navigate = useNavigate();
    const handlesubmit=()=>{
        navigate("/AddEmployee");
    }
  return (
<div>
    <div className=' xx'>
          <Header/>
                 
    </div>    
    <div style={{marginLeft:"80%"}}>
      <button type="submit"  className="btn btn-primary"onClick={handlesubmit}>Create</button>
      
      <button type="submit" className="btn btn-primary" onClick={()=>navigate ("/update")}>Modify</button>
      
      <button type="submit" className="btn btn-primary" onClick={()=>navigate ("/query")}>Query</button>
      
    </div>
    </div>
  )
}

export default First