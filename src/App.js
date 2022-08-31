
import uniqid from 'uniqid';
import {useState} from "react"
import './App.css';
import Days from './Components/Days/Days';
import Main from './Components/Main/Main';
import Input from './Components/Input/Input';
import monthFinder from './Components/MonthObj/MonthFinderObj';

function App() {

  const lists  =  [
    {
      title : "main",
      values : []
    },
    {
      title : "secondary",
      values : []
    },
    {
      title : "tertiary",
      values : []
    },
  ]
  const array = [{
    day : "Friday",
    id : "1ab",
    date : "13 Oct",
    lists : [
      {
        title : "main",
        values : [{
          id : "1m",
          text : "Send the email to client"
        }, {
          id : "2m",
          text : "Collect the books from Library"
        }, {
          id : "3m",
          text : "Go for football"
        }]
      },
      {
        title : "secondary",
        values : []
      },
      {
        title : "tertiary",
        values : []
      },
    ]
  },
  {
    day : "Saturday",
    id : uniqid(),
    date : "14 Oct",
    lists : [
      {
        title : "main",
        values : []
      },
      {
        title : "secondary",
        values : []
      },
      {
        title : "tertiary",
        values : [{
          id : "1t",
        }, {
          id : "2t"
        }, {
          id : "3t"
        }]
      },
    ]
  },
  {
    day : "Sunday",
    id : uniqid(),
    date : "15 Oct",
    lists : [
      {
        title : "main",
        values : []
      },
      {
        title : "secondary",
        values : [{
          id : "1s",
        }, {
          id : "2s"
        }, {
          id : "3s"
        }]
      },
      {
        title : "tertiary",
        values : []
      },
    ]
  }

]
  const [days, setDays] = useState(array)
  const [check, setCheck] = useState(false)
  const [listdays, setListdays] = useState(days[0])

  // sorting the month and date so they appear in same order 
  const month = ["Jan", "Feb", "Mar", "Apr", "May",
"Jun", "Jul", "Aug","Sep", "Oct", "Now", "Dec"]



const dateInt = (val) => {
   return  parseInt(month.indexOf(val.date.split(" ")[1]) + val.date.split(" ")[0])
}


function compare(a, b) {
 console.log(a, b);
 a = dateInt(a); b = dateInt(b)
 console.log(a,b, "values of sorting");
 if (a > b) return 1;
  if (b > a) return -1;

  return 0;
}
const sortDays = (array) => {
  console.log(array, "for sorting");
  array.sort(compare);
  return array
}

     // when user enter the new day for creating list
const handleClick = ({day, date}) => {

    setCheck(old => !old)
    console.log("Clicked");
    if(day === null && date === null){
     
      console.log(day, date)
    }
    else{
      console.log(date, "prev");
      const dateday = date.slice(8, 10) + " "

      const datemonth = monthFinder[date.slice(5, 7)]
      date = dateday.concat(datemonth)
    
      setDays(olddays => [...olddays, {day, date, id:uniqid(), lists}])
      const sortedDays = sortDays(days)
      console.log(sortedDays, "sorted days");
      setDays([...sortDays])
      console.log(days, " new days after sorting")
     
    }
  }
  
 // deletion of any item by clicking in the day list
 const handleDeleteDay = (dayId) => {
 
  // filter days by dayId
  console.log(dayId, "day Id");
  const filterDay = days.filter(val => val.id !== dayId);
  setDays(filterDay)
 }





  // clicked on any day item from days
  const handleDay = (id) => {
       console.log(id);
      //  console.log(days[2].id) 
       const filter_val = days.filter(val=> val.id === id)
       console.log(filter_val, "working");
       
       setListdays(filter_val[0])

       console.log(listdays);
     

  }


  // handle delete function which deleted the checked itme form list
  const deleteIdsFromList = (itemId,category,  ids) => {
   // finding particular day 
   const findDay= days.find(val => val.id === itemId)
   console.log(findDay, "Find Day")
   // finding particular list in a day 
   const findList = findDay.lists.find(val => val.title === category)
   console.log(findList, "Find List");
   // removing all checked item from the given list
   for(let i = 0 ; i < ids.length; i++){
    findList.values.splice(findList.values.findIndex(val => val.id === ids[i]), 1);
   } 

  
   for (let i = 0; i < findDay.lists.length; i++) {
     
     if(findDay.lists[i].title === category){
      findDay.lists[i].values = findList.values;
      console.log(findDay.lists[i], "For loop");
     }
    
   }
   
   console.log(findDay.lists  , "new find day ");
   console.log(findDay , "new find day");
 
   // filter the particular and then addd all the about functionality to new day 

   const filterdays = days.filter(vals => vals.id !== itemId)
   setDays([...filterdays,findDay ])

  console.log(findList, "new length");
 
   console.log(itemId);
   console.log(category);
   console.log(ids, "ids");

  }
  console.log(days);
  return (
    
    <div className="App">
      <Days days = {days} 
       handleDay = {handleDay}
       handleDeleteDay = {handleDeleteDay}/>
      <div className='create-list-area'>
      <h2 className='create-list-btn' onClick={handleClick}>+</h2>
      <h4>Create List</h4>
      </div>
      
      {check && <Input className="new-list-create" handleClick = {handleClick}/>}
      <Main array = {listdays} days= {days} deleteIdsFromList = {deleteIdsFromList}/>
    </div>
  );
}

export default App;
