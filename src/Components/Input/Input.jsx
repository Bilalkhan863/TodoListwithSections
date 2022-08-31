import React from 'react'
import { useState, useEffect } from 'react'

import './Input.css'

const Input = ({handleClick}) => {
    const [daydate, setDaydate] = useState({day : '', date : ''})
   

    const handleClickDayDate = () => {
         if(daydate.day !== "" && daydate.date !== ""){
           handleClick(daydate);
         }
         else{
           alert("Enter both day and date")
         }
    }
     
 

  return (
   
    <div className='newsubmission'>
        <div className='input-date' >
        <input type="text" name="day"  onChange={e => setDaydate({...daydate, "day": e.target.value})} value={daydate.day}  placeholder = "Entet the day" />
       
        <input type="date" name="date" onChange={e => setDaydate({...daydate, "date": e.target.value})} value={daydate.date} placeholder='Date' />
        </div>
        {/* <button onClick={()=>handleClick(daydate)}>Submit</button> */}
        <button onClick={handleClickDayDate}>
            Submit
        </button>
    </div>
  )
}

export default Input