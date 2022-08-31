import React from 'react'
import "./Days.css"
import MainChild from '../Main/MainChild'
import { useState } from 'react'

const  Days = ({days, handleDay, handleDeleteDay}) => {
  const [background, setBackground] = useState("1ab")
  const [showDropDown, setShowDropDown] = useState(false)
  

  const handleClickDayandBackground = (id) => {
   
    setBackground(id)
    handleDay(id)
   
    
  }

  console.log(background);
  return (
    <div className='day-row'>
        {days.map((val, id ) => (
            <div key={val.id} className={background === val.id ? "day-date tranparent": "day-date color"} onClick={()=>handleClickDayandBackground(val.id)} >
               <h3>{val.day}</h3> 
                <h4>{val.date}</h4>
                <div className='drop-down'>
                <h4 onClick={()=>setShowDropDown(old=>!old)}>...</h4>
                {showDropDown && background === val.id && <div className='drop-down-list'>
                    {/* <p><i className="fa fa-pencil" aria-hidden="true"></i> edit</p> */}
                    <p onClick={()=> handleDeleteDay(val.id)}><i className="fa fa-trash" aria-hidden="true"></i> delete</p>
                </div>
                 }
                </div>
                </div>
        ))}
    </div>
  )
}

export default  Days


// className={background === true ? "day-date transparent":"day-date color"}