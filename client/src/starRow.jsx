import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledStarRow = styled.div`

  display: inline-block;
  font-size: ${props => props.size}px;
  font-family: Times;

  &::before {
    content: '★★★★★';
   background: linear-gradient(90deg, hsl(0, 100%, 60%) ${props => props.rating}%, #D8DCD6 ${props => props.rating}%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StarRow = (props) => {
  var rating = props.rating || 0;
  //Rounds number to nearest multiple of 5
  rating = Math.round(rating / 5) * 5;
  return (
    <div>
      <StyledStarRow rating={rating || 0} size={props.size || 30}></StyledStarRow>
    </div>
  );
};

StarRow.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number
};

export default StarRow;
