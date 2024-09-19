import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Naavbar from "../components/Navbar";
import { FiClock } from "react-icons/fi";
import { FaSignal } from "react-icons/fa";

function Info() {
  const location = useLocation();
  const state = location.state || {}; // Provide a default empty object

  // Destructure or provide defaults for state
  const { date = '17th May', names = 'Name not available', level = 'level not available', description = 'description not available' } = state;

  return (
    <div>
      <Naavbar />
      {/* Hackathon Details Section */}
      <div
        style={{ width: "1442px", height: "419px", backgroundColor: "#003145", padding: '160px 0px 0px 126px' }}
      >
        <div>
          <div style={{
            width: '464px',
            height: '34px',
            backgroundColor: '#FFCE5C',
            borderRadius: '5px',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '12px',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: "10px"
          }}>
            <FiClock />{`Starts on ${date} 09:00 PM (India Standard Time)`}
          </div>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '600',
            lineHeight: '48px',
            textAlign: 'left',
            color: '#fff'
          }}>{names}</h2>
          <p style={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "left",
            color: '#F8F9FD'
          }}>
        Identify the class to which each butterfly belongs to
          </p>

          <div style={{
            width: '102px',
            height: '34px',
            backgroundColor: '#F8F9FD',
            borderRadius: '5px',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '12px',
            color: '#003145',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: "10px"
          }}>
            <FaSignal />{level}
          </div>
        </div>
      </div>

      {/* Navigation and Actions Section */}
      <div style={{
        width: "1440px",
        height: "66px",
        border: "0.3px",
        boxShadow: "0px 6px 12px 0px #DDE6ED",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: "1px 126px"
      }}>
        <div style={{
          width: '133px',
          height: '53px',
          padding: '12px 8px 0px 0px',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '29.12px',
          textAlign: 'left',
          borderBottom: "4px solid #44924C",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Overview</div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '91px',
            height: '37px',
            borderRadius: '10px',
            color: '#fff',
            backgroundColor: '#44924C',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: "1.2px solid #44924C"
          }}> <Link style={{textDecoration:'none',color:'#fff'}} to={'/HackathoneForm'}>Edit</Link> </div>
          <div style={{
            width: '91px',
            height: '37px',
            borderRadius: '10px',
            color: '#DC1414',
            backgroundColor: '#fff',
            border: "1.2px solid #DC1414",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}><Link style={{textDecoration:'none',color: '#DC1414', }} to={"/"}>Delete</Link>  </div>
        </div>
      </div>

      {/* Additional Hackathon description */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "30px 0px 0px 126px" }}>
        <p style={{
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "24px",
          textAlign: "left",
          color: '#64607D'
        }}>{description}</p>
      </div>
    </div>
  );
}

export default Info;
