import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Img';

function Card(props) {
  return <Image src={props.imageUrl} alt={props.name} />;
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
