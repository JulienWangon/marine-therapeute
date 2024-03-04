import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TestimoniesCard from '../TestimoniesCard/TestimoniesCard';
import { useTestimonies } from '../../../context/TestimoniesContext';

import './testimoniesSlider.css';

const TestimoniesSlider = () => {
  const { testimonies } = useTestimonies();
  const validTestimonies = testimonies.valide || [];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    puseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
   
   
    responsive: [

      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        }
      },
     
      {
        breakpoint: 1440, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 550, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  };

  return (
   
      <div className= "sliderWrapper">
        <Slider {...settings}>
          {validTestimonies.map((testimony, index) => (
            <div key={index}>
              <TestimoniesCard 
                firstName={testimony.firstName} 
                content={testimony.content} 
                rating={testimony.rating} 
              />
            </div>
          ))}
        </Slider>      
      </div>

  );
};

export default TestimoniesSlider;