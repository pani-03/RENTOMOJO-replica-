import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "react-webp-image";
import Banner1 from '../assets/Banner1.webp';
import Banner2 from '../assets/Banner2.webp';
import Banner3 from '../assets/Banner3.webp';
import Banner4 from '../assets/Banner4.webp';
import { Link } from "react-router-dom";
import { AllProducts } from "./AllProducts";
import { useNavigate } from 'react-router-dom';


function Banner() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"

  };
  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/AllProducts");
  }
  return (
    <div >
       
    <div className="slider-container" style={{borderRadius:"10px"}} >
      <Slider {...settings}>
        <div onClick={() => gotToNewPage()}>
          <h3><img style={{height: "350px", width: " 1250px" }} src={Banner1} alt="" /></h3>
        </div>
        <div onClick={() => gotToNewPage()}>
          <h3><img  style={{height: "350px", width: " 1250px"}} src={Banner2} alt="" /></h3>
        </div>
        <div onClick={() => gotToNewPage()}>
          <h3><img  style={{height: "350px", width: " 1250px"}} src={Banner3} alt="" /></h3>
        </div>
        <div onClick={() => gotToNewPage()}>
          <h3><img  style={{height: "350px", width: " 1250px"}} src={Banner4} alt="" /></h3>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Banner;
