import React from 'react';
import '../stylesheets/services.css';
import ServiceCard from './ServiceCard';
import { services } from './data/ServicesData';
import PageTitle from './PageTitle';

const Services = () => {
  const title = 'My Awesome Services';
  const desc = "There are some good services, i'm providing. You would love to utilize each of them";
  return (
    <div className="services-page">
      <PageTitle title={title} desc={desc} />
      <ul className="services-container">
        {
          services.map((service) => (
            <li key={`service-${service.id}`}>
              <ServiceCard card={service} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
export default Services;
