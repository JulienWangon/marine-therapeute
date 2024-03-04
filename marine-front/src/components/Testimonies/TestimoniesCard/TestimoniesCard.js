import React from 'react';

import StarRating from '../StarsRating/StarsRating';

import './testimoniesCard.css';

const TestimoniesCard = ({ firstName, content, rating }) => {
  return (
    <div className="testimoniesWrapper">
        <div className="bubble">
        <svg className="quoteLogo" clipRule="evenodd" fillRule="evenodd" fill="white" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="fi_10426427"><g id="Icon"><path d="m5.383 14.58c-2.354-.456-4.133-2.53-4.133-5.016 0-2.82 2.289-5.109 5.109-5.109s5.109 2.289 5.109 5.109c0 3.758-1.266 6.092-2.752 7.551-2.275 2.234-5.124 2.428-5.124 2.428-.29.021-.565-.128-.707-.381-.143-.252-.126-.565.042-.801 0 0 1.354-1.906 2.198-3.316.088-.148.177-.311.258-.465z"></path><path d="m16.665 14.58c-2.354-.456-4.133-2.53-4.133-5.016 0-2.82 2.289-5.109 5.109-5.109s5.109 2.289 5.109 5.109c0 3.758-1.266 6.092-2.752 7.551-2.275 2.234-5.124 2.428-5.124 2.428-.29.021-.565-.128-.707-.381-.142-.252-.126-.565.042-.801 0 0 1.354-1.906 2.198-3.316.088-.148.177-.311.258-.465z"></path></g></svg>
        </div>
        <div className="testimonyCard">
          <div className="textContainer">
            <span className="firstName">{firstName}</span>
            <p className="content">{content}</p>
          </div>          
          <div className="ratingContainer">
            <StarRating rating={rating}/>
          </div>

        </div>
      
    </div>
  );
};

export default TestimoniesCard;