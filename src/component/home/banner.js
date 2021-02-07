import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./../../style.css";
import Slider from "react-slick";


function Banner(){

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{display: "none"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "none"}}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
      const [BannerImg,setBannerImg] = useState([]);
      useEffect(()=>{
        axios.get("./../../data.json").then((respond)=>{
          const Imgs =respond.data[0].banners; 
          setBannerImg(Imgs)
        })
      },[]);
      const sliderItem = BannerImg.map((src,index)=>{
            return <div className="home-slider" key={index}>
            <div style={{'backgroundImage': `linear-gradient(50deg, rgba(34, 33, 33, 0.76), rgba(68, 68, 119, 0.52)),url(${src.src})`}} className="slider-banner">
              <span className="banner-caption">{src.info}</span>
            </div>
          </div>
      });
      return (
        <div className="container">
         <Slider {...settings}> 
            {sliderItem}
          </Slider>
        </div>
      )
};

export default Banner;