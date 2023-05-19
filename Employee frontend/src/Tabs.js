import React from "react";
import "./Tabs.css"
import { useState } from "react";
import Address from "./component/Address";
import Contact from "./component/Contact";
import Bank from "./component/Bank";
import Role from "./component/Role";
import Mobile from "./component/Mobile";



function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
  
    return (
      <>
      <div>
      {/* <div style={head}>
              <h5 style={{marginLeft:'35px'}}>Profile 03</h5>
              <p style={{marginRight:'35px',wordSpacing:'5px'}}> <AiIcons.AiFillHome/> <SlIcons.SlArrowRight style={{fontSize:'15px'}}/>Account Profile <SlIcons.SlArrowRight style={{fontSize:'15px'}}/> Profile 03</p>
          </div> */}
      </div>
      <div className="container">
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
            
            <Address/>
            
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            
            <Contact/>
               {/* <Billing/>
              <Table/> */}
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2></h2>
            

            <Bank/>
              {/* <ChangePassword/>
              <DeleteAccount/>
               */}
          </div>
      
         <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            
            <Role/>
            {/* <Checkbox/>
            <Last/> */}
           
           
          </div>


          <div
            className={toggleState === 5 ? "content  active-content" : "content"}
          >
           
            <Mobile/>
              {/* <ChangePassword/>
              <DeleteAccount/>
               */}
          </div>
  
          
        </div>
      </div>
      </>
    );
  }
  
  export default Tabs;