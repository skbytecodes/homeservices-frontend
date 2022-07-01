import axios from "axios";
import React from "react";

function Blog() {


  async function handleClick(){
    let request = await axios.get("http://localhost:8081/myServices",{
      "method":"GET",
      "mode" : "no-cors"
    });
    console.log(request);
  }


  return (
    <div>
      <h1>Blog</h1>
      <p onClick={handleClick}> call api</p>
    </div>
  );
}

export default Blog;
