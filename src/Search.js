import React, {useState} from 'react'
import './Search.css'
import { Link ,useHistory} from 'react-router-dom'
function Search() {
  const [destination,setDestination]=useState('')
  const history = useHistory()
  const handlego =()=>{
    localStorage.setItem("Destination",JSON.stringify(destination))
    history.push("/search-results")
  }
  return (
    <div className='search_main'>
      <div className="blocks">
        <div className="mp_block datetime">
          <div className="mp_content">
             <h1>Date and Time</h1>
        <input type="datetime-local" name="" id="" />
          </div>
       
      </div>
      <div className="mp_block">
        <div className='mp_content'>
      <h1>Starting Point</h1>
        <input type="text" placeholder='Enter Starting Point' />
      <h1>Destination</h1>
      <input type="text" placeholder='Enter Destination'  value={destination} onChange={e=>setDestination(e.target.value)}/>
      <button onClick={handlego}>GO</button>
    </div>
      </div>
      <div className="mp_block budget" >
      <div className="mp_content">
      <h1>Enter Your Budget</h1>
        <input type="number"  placeholder='Enter Your Budget'/>
      </div>
        
      </div>
      </div>
      
    
    </div>
  )
}

export default Search