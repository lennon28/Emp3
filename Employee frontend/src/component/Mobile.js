import React from 'react'

function Mobile(props) {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
        <div>
      <label>IMEI NO 1</label><input style={{width:'350px'} } id="imei_NO1" onChange={props.handlechange}/>
      </div>
      <div>
      <label style={{marginLeft:'100px'}}>IMEI NO 2</label><input style={{width:'350px'}} id="imei_NO2" onChange={props.handlechange}/>
      </div>
    </div>
  )
}

export default Mobile
