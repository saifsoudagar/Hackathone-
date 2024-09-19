import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import photos from "../assets (1)/photo";
import { Link } from "react-router-dom";


const { logo } = photos;
function Naavbar() {
  return (
    <div>
      
       <Navbar
        expand="lg"
        style={{
          backgroundColor: "#FFFFFF",
          height: "64px",
          paddingLeft: "89px",
          paddingTop: "13px",
        }}
        className="custom-navbar"
      >
        <Container style={{ maxWidth: "1441px" }}>
          <Link to="/">
            <img
              style={{
                width: "87px",
                height: "38.11px",
                top: "13px",
                left: "89px",
              }}
              src={logo}
              alt="logo"
            />
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naavbar
