import React from 'react'
import MainChild from './MainChild'
import "./Main.css"

const Main = ({array, days, deleteIdsFromList}) => {
    // console.log(array.lists[0].values)
    console.log(days);
    console.log(array.id);
  return (
    <div className='list-row'>
      
        {array.lists.map((val, id) => <MainChild key= {id}
         days = {days}
         name = {val.title} 
         todoList = {val.values}
         itemId = {array.id}
         deleteIdsFromList = {deleteIdsFromList}/>)}
        
    </div>
  )
}

export default Main

  {/* <h2>{array.day } and {array.id}</h2>
        <h3>{array.lists[0].title}</h3>
        {array.lists[0].values.map((val, id)=> <li key = {id}>{val.text}</li>)}
        <h3>{array.lists[1].title}</h3>
        <h3>{array.lists[2].title}</h3> */}