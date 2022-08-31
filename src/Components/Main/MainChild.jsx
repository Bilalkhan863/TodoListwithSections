import React from 'react'
import { useState } from 'react'
import "./MainChild.css"
import uniqid from 'uniqid'

const MainChild = ({name , todoList, days, deleteIdsFromList, itemId}) => {
    // console.log(todoList, "todo");
    const [update , setUpdate] = useState(false)
    const [inputVal, setInputVal] = useState("")
    
    const [deleteitems, setDeleteItems] = useState([])

    const handleClickNewItem = () => {
        console.log("Clicked");
        todoList.push({id : uniqid(), text : inputVal})
        console.log(days, "updated");
        setUpdate(false)
        setInputVal("")
    }
    const handleClickDelete = (e) => {
        if(e.target.checked === true){
            // set values to deleteitems array
            // console.log(e.target.value, e.target.checked);
            setDeleteItems(oldids => [...oldids, e.target.value]) 
        }
        else {
            // delete the is from deleteitems array 
            console.log(e.target.value, e.target.checked);
            setDeleteItems(oldids => oldids.filter(val => val!==e.target.value))
        }
        
        console.log(deleteitems);
      
        setUpdate(false)
       
    }
  

    const deleteIdsHelpingFunction = () => {
        deleteIdsFromList(itemId,name, deleteitems)
        setDeleteItems([])
    }
    
    
  return (
    
    <div className='list-area'>
        <h3 className='name'>{name}</h3>


        {todoList.map((val, id) => <li className='list-styles'  key={val.id}  ><input type={"checkbox"}  onChange={handleClickDelete}  value={val.id}/> {val.text}</li>)}


        { update && <><input type={"text"} placeholder="Enter the new Item" value= {inputVal} onChange = {e => setInputVal(e.target.value)} /> <button className='btn' onClick={handleClickNewItem}>Submit item!</button></>}
   
        
        <div className='btns'>
     
        <h3 className='update del' onClick={deleteIdsHelpingFunction}>Delete</h3>
        <h3 className='update add' onClick = {()=> setUpdate(old => !old)}>+</h3>

        </div>
        
        

    </div>
    
  )
}

export default MainChild