/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimage from "../../assets/bilal.jpg";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "../../styles/herosection.css";
import { Link } from "react-router-dom";


const CustomPrevArrow = ({ onClick }) => (
	<div onClick={onClick}>
		<GrFormPrevious className="custom-arrow custom-prev-arrow"/>	
	</div>
);


const CustomNextArrow = ({ onClick }) => (
	<div onClick={onClick}>
		<GrFormNext className="custom-arrow custom-next-arrow"/>

	</div>
);

CustomPrevArrow.propTypes = {
      onClick: PropTypes.func.isRequired,
};


CustomNextArrow.propTypes = {
      onClick: PropTypes.func.isRequired,
};

export { CustomPrevArrow, CustomNextArrow };




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
    dotsClass: "slick-dots custom-dots-class",
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
           <Header />        
           <Slider {...settings} className="h-[90vh]">
              <div className="brightness-50">
                  <Link to="/" className="">
                        <img src={bgimage} alt="" className="bg-cover bg-center h-auto w-[100%]" />
                  </Link>
              </div>
              
             
              
              
             
              
            </Slider>

      </>
  );
};

export default HeroSlider;
