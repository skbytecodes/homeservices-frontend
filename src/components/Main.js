import React, { useEffect, useState } from "react";
import Home from "../images/rest.jpg";
import "../styles/Main.css";
import axios from "axios"

function Main() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchAllServices() {
      const response1 = await axios.get("http://localhost:8081/myServices");
      setServices(response1.data);
    }
    fetchAllServices();
  }, []);


  return (
    <div className="main_container">
      <div className="img_container">
        <img src={Home} className="myimage" />
      </div>
      <div className="over_container">
        <div className="text_container">
          <p id="first_line">LOVE YOUR HOME</p>
          <p id="second_line">We make it easy to hire the right professional</p>
        </div>
        <form className="search_form">
          <select className="service_select">
            <option value="">Please Select Service</option>
            {
              services.map(service=>(
                <option value={service.serviceId}>{service.serviceName}</option>
              ))
            }
    
          </select>
          <button className="go">GO</button>
          <p align="left" style={{ color: "white", fontSize: "14px" }}>
            E.g. House cleaning, Painting, Pest control, Renovation
          </p>
        </form>
      </div>
    </div>
  );
}

export default Main;
