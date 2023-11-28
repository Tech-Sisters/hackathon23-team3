/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgimage from '../../assets/bilal.jpg';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import '../../styles/herosection.css';
import { Link } from 'react-router-dom';


const CustomPrevArrow = (props) => (
	<div onClick={props.onClick}>
		<GrFormPrevious className="custom-arrow custom-prev-arrow"/>	
	</div>
);


const CustomNextArrow = (props) => (
	<div onClick={props.onClick}>
		<GrFormNext className="custom-arrow custom-next-arrow"/>

	</div>
);

const HeroSlider = () => {
  const settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots custom-dots-class',
    responsive: [
      {
            breakpoint: 1024,
            settings: {
                  slidesToShow: 3,
            },
      },
      {
            breakpoint: 768,
            settings: {
                  slidesToShow: 2,
            },
      },
      {
            breakpoint: 480,
            settings: {
                  slidesToShow: 1,
            },
      },
    ],
  };

  return (

     <>  
         
         <Slider {...settings} className="h-[80vh]">
              <Link to="/" className="brightness-50">
                    <img src={bgimage} alt="" className="bg-cover bg-center h-auto w-[100%]" />
              </Link>
             
              <Link to="/" className="brightness-50">
                    <img src={bgimage} alt="" className="bg-cover bg-center h-auto w-[100%]" />
              </Link>
             
              <Link to="/" className="brightness-50">
                    <img src={bgimage} alt="" className="bg-cover bg-center h-auto w-[100%]" />
              </Link>
             
              <Link to="/" className="brightness-50">
                    <img src={bgimage} alt="" className="bg-cover bg-center h-auto w-[100%]" />
              </Link>
              <Link to="/" className="brightness-50">
                    <img src={bgimage} alt="" className="bg-cover bg-center h-auto w-[100%]" />
              </Link>
              
             
              
            </Slider>

      </>
  );
};

export default HeroSlider;
