import React from 'react'





function Contact(props) {
  return (
    <div>
       <div className="form-group">
      <label for="mobileno">Mobile NO:</label>
      <input type="text" className="form-control" id="mobile_NO" onChange={props.handlechange} />
    </div>
    <div className="">
      <label for="emailid">Email Id:</label>
      <input type="email" className="form-control" id="email_ID" onChange={props.handlechange} />
    </div>
    <div className="">
      <label for="website">Website:</label>
      <input type="text" className="form-control" id="website" onChange={props.handlechange} />
    </div>
    </div>
  )
}

export default Contact
