import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Img';

function Card(props) {
  console.log(props);
  return (
      <Image src={props.imageUrl} />
  );
}

Card.propTypes = {
  item: PropTypes.any,
};

export default Card;
