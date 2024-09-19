import React from "react";

import photos from "../assets (1)/photo";
import { Link } from "react-router-dom";
import Naavbar from "./Navbar";

const { logo, rocket, icon1, icon2, icon3 } = photos;

const HeadSection = () => {
  return (
    <div
      style={{
        width: "1442px",
        height: "625px",

        backgroundColor: "#003145",
      }}
    >
     <Naavbar/>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            width: "705px",
            height: "348px",
            marginLeft: "143px",
            marginTop: "166px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "9.71px",
              height: "115.91px",
              marginTop: "30px",
              backgroundColor: "#FFCE5C",
            }}
          />
          <div style={{ width: "643px", height: "346px" }}>
            <h1
              style={{
                fontSize: " 48px",
                fontWeight: "600",
                lineHeight: "56px",
                textAlign: "left",
                marginLeft: "63px",

                color: "#fff",
              }}
            >
              Accelerate Innovation with Global AI Challenges
            </h1>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "28px",
                marginLeft: "63px",
                textAlign: "left",
                color: "#ECECEC",
              }}
            >
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <button
              style={{
                width: "198px",
                height: "47px",

                padding: "15px 18px 14px 18px",
                gap: "10px",
                borderRadius: "10px",
                border: "none",
                color: "#003145",
                fontWeight: "500",
                fontSize: "18px",
                marginLeft: "63px",
                marginTop: "20px",
              }}
            >
              {" "}
              <Link to={'/HackathoneForm'}
                style={{
                  textDecoration: "none",
                  color: "#003145",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                {" "}
                Create Challenge
              </Link>
            </button>
          </div>{" "}
        </div>

        <div>
          <img
            style={{ width: " 242px", height: "294px", marginTop: "190px" }}
            src={rocket}
            alt="rocket"
          />
        </div>
      </div>

      <div
        style={{
          width: "1441px",
          height: "200px",
          backgroundColor: "#002A3B",
          marginTop: "30px",
          display:'flex',
          alignItems:'center',
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "1075px",
            height: "55px",
            display: "flex" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            <img src={icon1} alt="" />
            <div
              style={{
                width: "169px",
                height: "42px",
                marginBottom: "35px",
                marginLeft: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: " 20px",
                  textAlign: " left",
                  color: "#fff",
                }}
              >
                100k+ <br />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  AI model submissions
                </span>
              </p>
            </div>
          </div>

<div style={{width: '1px',
height: '38px',backgroundColor:'#C4C4C4' , margin:'10px 80px'
}} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={icon2} alt="" />
            <div
              style={{
                width: "169px",
                height: "42px",
                marginBottom: "35px",
                marginLeft: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: " 20px",
                  textAlign: " left",
                  color: "#fff",
                }}
              >
                50k+ <br />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  Data Scientists
                </span>
              </p>
            </div>
          </div>
          <div style={{width: '1px',
height: '38px',backgroundColor:'#C4C4C4', margin:'10px 80px'

}} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={icon3} alt="" />
            <div
              style={{
                width: "169px",
                height: "42px",
                marginBottom: "35px",
                marginLeft: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: " 20px",
                  textAlign: " left",
                  color: "#fff",
                }}
              >
                100k+ <br />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  AI Challenges hosted
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};    

export default HeadSection
