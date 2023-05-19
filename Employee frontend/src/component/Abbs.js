import React from 'react'
import { useState } from 'react'
import Address from './Address'
import Role from './Role'

function Abbs() {
   const [tab ,settab] = useState(false)
   const [tab1 ,setta1] = useState(false)
 const handleset1=()=>{
    settab(true)
 }
 const handleset2=()=>{
    settab(false)
 }
  return (
    <div>
        <button onClick={handleset1}>Addres</button>
        <button onClick={handleset2}>Role</button>
        {tab && ! tab1 ? <Address handlechange={handlechange} handlelocation={handlelocation}/> : <Role />}
      
    </div>
  )
}

export default Abbs
