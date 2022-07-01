import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "../styles/Services.css";
import Service from "./Service";
import { Link } from "react-router-dom";
import axios from "axios";

function Services() {
  const [services1, setServices1] = useState([]);
  const [services2, setServices2] = useState([]);

  useEffect(() => {
    async function fetchService() {
      const response1 = await axios.get("http://localhost:8081/allServicesByCategoryId/"+1);
      setServices1(response1.data);
      const response2 = await axios.get("http://localhost:8081/allServicesByCategoryId/"+2);
      setServices2(response2.data)
    }
    fetchService();
  }, []);

  return (
    <div className="service_container">
      <div className="first_container">
        <p id="service_heading">On Demand Services</p>
        <div className="services">
          {services1.map((service) => (
            <Link to="/service" className="every-service">
              <Service sid={service.serviceId} />
            </Link>
          ))}
        </div>
      </div>

      <div className="first_container">
        <p id="service_heading">Repairs and Installations</p>
        <div className="services">
          {services2.map((service) => (
            <Link to="/service" className="every-service">
              <Service sid={service.serviceId} />
            </Link>
          ))}
        </div>
      </div>

      <div className="first_container">
        <p id="service_heading">Cleaning Services</p>
        <div className="services">
          {services1.map((service) => (
            <Link to="/service" className="every-service">
              <Service sid={service.serviceId} />
            </Link>
          ))}
        </div>
      </div>

      <div className="first_container">
        <p id="service_heading">Pest Control</p>
        <div className="services">
          {services1.map((service) => (
            <Link to="/service" className="every-service">
              <Service sid={service.serviceId} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
