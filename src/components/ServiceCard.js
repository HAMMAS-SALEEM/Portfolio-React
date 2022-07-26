import React from 'react';
import '../stylesheets/servicecard.css';
import PropTypes from 'prop-types';

const ServiceCard = ({ card }) => (
  <div className="service-card">
    <card.Svg className="service-card-svg" />
    <h3 className="service-card-title">{card.title}</h3>
    <p className="service-card-description">{card.description}</p>
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
