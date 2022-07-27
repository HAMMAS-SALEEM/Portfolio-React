import React from 'react';
import '../stylesheets/services.css';
import ServiceCard from './ServiceCard';
import { services } from './data/ServicesData';

const Services = () => (
  <div className="services-page">
    <h2 className="services-title">My Awesome Services</h2>
    <p className="services-par">There are some good services, i&apos;m providing. You would love to utilize each of them</p>
    <ul className="services-container">
      {
        services.map((service) => (
          <li key={service.id}>
            <ServiceCard card={service} />
          </li>
        ))
      }
    </ul>
  </div>
);

export default Services;
