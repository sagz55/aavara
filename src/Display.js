import React,{useState,useEffect} from 'react'
import {auth, db } from './Firebase';
import pc from './images/App.test.jpeg'
import loc from './images/placeholder.png'
import star from './images/star.png'
import './Display.css'
function Display() {
    const destiSelected = localStorage.getItem('Destination').replace(/"/g, "")
    const [hotels,setHotels]=useState([])
    useEffect(()=>{
        db.collection(destiSelected).onSnapshot((querySnapshot)=>{
            const details=[]
            querySnapshot.forEach((doc)=>{
                details.push(doc.data())
            })
            setHotels(details)
        })
    },[])
    console.log("h>",hotels)
  return (
    <div className='display_main'>
        <h1>Hotels in {destiSelected}</h1>
            
            <div className="display_container">
                {
                    hotels.map((hotel)=>(
                        <div className="display_card">
                        <div className="card_top">
                            <div className="disp_img">
                            <img src={pc} alt="" />
                        </div>
                        <div className="disp_info">
                            <h2>{hotel.Hotelname} </h2>
                            <h3>${hotel.Price}</h3>
                            <div className="disp_rating">
                                {
                                Array(hotel.Rating).fill().map((_,i)=>(
                                    <p><img src={star} alt="" /></p>
                                ))
                            }
                            </div>
                        </div>
                        </div>
                        <div className="card_bottom">
                             <h3> <img src={loc} alt="" />  {hotel.Location}</h3>
                        </div>
                           
                            
                        
                    </div>
                    ))
                }
                
                
                    
                
                   
              
            </div>
    </div>
  )
}

export default Display