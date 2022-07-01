import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../styles/Header.css";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from '@mui/icons-material/CallEnd';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <header className="header">
      <div className="logodiv">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="menuContainer">
        <ul>
          <Link className="link" to="/">
            <li className="project">Home</li>
          </Link>

          {/* <Link className="link" to="/designs">
            <li className="about">Designs</li>
          </Link> */}

          <Link className="link" to="/reviews">
            <li className="contact">Reviews</li>
          </Link>

          <Link className="link" to="/blogs">
            <li className="blog">Blog</li>
          </Link>

          <Link className="link" to="/login">
            <li className="login">Sign in</li>
          </Link>

          <li className="phone" style={{display:"flex", justifyContent:"center", alignItems:"center"}}> 
            9582364692<CallEndIcon style={{ color: "white" }} />
          </li>
        </ul>
      </div>
      <div className="hamburger">
          <MenuIcon style={{ color: "white" }} />
      </div>
    </header>
  );
}

export default Header;
