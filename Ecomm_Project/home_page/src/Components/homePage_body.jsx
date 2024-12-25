import React from 'react'
import './EnlargingBox.css';
import hover1 from '../assets/box.png'
import hover2 from '../assets/furniture.png'
import hover3 from '../assets/home-appliance.png'
import hover4 from '../assets/responsive.png'
import hover5 from '../assets/treadmill.png'
import hover6 from '../assets/rocking-horse.png'
import { Products } from './Products';
import { AllProducts } from './AllProducts';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const HomePage_body = () => {
  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/AllProducts");
  }
  
  return (
    <div>
        <div style={{ display: "flex", justifyContent: "center"}}><h2 style={{fontSize:"25px"}}>Rent Furniture & Appliances</h2></div>
        <br />
    <div style={{display: "flex",justifyContent: "space-evenly"}}>
    <div className="enlarge-box" style={{display: "flex",flexDirection:"column", alignItems:"center"}}>
      <img style={{height: "60px",width:"60px"}} src={hover1} alt="" onClick={() => gotToNewPage()}  />
      <p>Packages</p>
    </div>
    <div style={{display: "flex",flexDirection:"column", alignItems:"center"}} className="enlarge-box">
      <img style={{height: "60px",width:"60px"}} src={ hover2} alt=""  onClick={() => gotToNewPage()}/>
      <p>Furniture</p>
    </div>    
    <div style={{display: "flex",flexDirection:"column", alignItems:"center"}} className="enlarge-box">
      <img style={{height: "60px",width:"60px"}} src={hover3} alt=""  onClick={() => gotToNewPage()} />
      <p>Appliances</p>
    </div>     
    <div style={{display: "flex",flexDirection:"column", alignItems:"center"}} className="enlarge-box">
      <img style={{height: "60px",width:"60px"}} src={hover4} alt=""  onClick={() => gotToNewPage()}/>
      <p>Electronics</p>
    </div>     
    <div style={{display: "flex",flexDirection:"column", alignItems:"center"}} className="enlarge-box">
      <img style={{height: "60px",width:"60px"}} src={hover5} alt=""  onClick={() => gotToNewPage()}/>
      <p>Fitness</p>
    </div>     
    <div style={{display: "flex",flexDirection:"column", alignItems:"center"}}className="enlarge-box">
      <img  style={{height: "60px",width:"60px"}}src={hover6} alt=""  onClick={() => gotToNewPage()}/>
    <p>Baby & Kids</p>
    </div>
    </div> 
    <br />       
    </div>
  )
}

