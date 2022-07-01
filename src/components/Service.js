import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/Service.css";

function Service({ sid }) {
  const [myService, setMyService] = useState({});
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    async function fetchService() {
      const response = await axios.get(
        "http://localhost:8081/myServiceById/" + sid
      );
      setMyService(response.data);
      console.log("image ", response);
      setImageName(response.data.serviceImage.replace("C:\\Users\\sushi\\Documents\\coding zip files\\homeservice-frontend\\home-services\\src\\images\\", ""));
    }
    fetchService();
  }, []);


  function handleServiceClick(sid){
    console.log("sid ",sid)
  }

  return (
    <div className="my-service">
      {imageName == "" ? (
        <CircularProgress />
      ) : (
        <div onClick={() => handleServiceClick(myService.serviceId)}>
          <img className="s_image" src={require(`../images/${imageName}`)} />
          <p className="title">{myService.serviceName}</p>
        </div>
      )}
    </div>
  );
}

export default Service;
