import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './styles/HackathoneCard.css'; // Import the CSS file

const formatDate = (date) => {
  try {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Invalid Date');
    }
    return parsedDate.toLocaleDateString();
  } catch {
    return new Date().toLocaleDateString();
  }
};

const HackathoneCard = ({ img, name, description, status = 'Upcoming', level, startDate, endDate }) => {
  const navigate = useNavigate();

  const labelColors = {
    Upcoming: '#F2C94C40',
    Active: '#44924C3D',
    Past: '#FF3C002B'
  };

  const labelColor = labelColors[status] || '#F2C94C40';

  const getTimeRemaining = (start) => {
    const now = new Date();
    const startTime = new Date(start);
    const timeDiff = startTime - now;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const { days, hours, minutes } = status === 'Upcoming' ? getTimeRemaining(startDate || new Date()) : { days: 0, hours: 0, minutes: 0 };

  const defaultStartDate = new Date();
  defaultStartDate.setDate(defaultStartDate.getDate() - 10);

  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() - 1);

  const formattedStartDate = status === 'Past' ? formatDate(startDate || defaultStartDate) : '';
  const formattedEndDate = status === 'Past' ? formatDate(endDate || defaultEndDate) : '';

  const handleCardClick = () => {
    navigate('/hackathon-info', { state: { date: endDate, names: name, status, level, description } });
  };

  return (
    <div
      onClick={handleCardClick}
      className="card-container"
      role="button"
      aria-label={`View details for ${name}`}
    >
      {/* Hackathon Image */}
      <img
        className="card-image"
        src={img}
        alt={`Image for ${name}`}
      />

      {/* Hackathon Details */}
      <div className="details-container">
        {/* Status Label (Active, Upcoming, Past) */}
        <label
          className="status-label"
          style={{ backgroundColor: labelColor }}
        >
          {status}
        </label>

        {/* Hackathon Name */}
        <h3
          style={{
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '26px',
            margin: '10px 0',
          }}
        >
          {name}
        </h3>

        {/* Countdown Timer for Upcoming Hackathons */}
        {status === 'Upcoming' ? (
          <>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '14px',
                color: '#444444',
                marginBottom: '10px',
              }}
            >
              Starts in
            </span>

            <div className="countdown">
              <span>{days}</span>:
              <span>{hours}</span>:
              <span>{minutes}</span>
            </div>

            <div className="time-units">
              <span>Days</span>
              <span>Hours</span>
              <span>Minutes</span>
            </div>
          </>
        ) : status === 'Active' ? (
          <>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '14px',
                color: '#444444',
                marginBottom: '10px',
              }}
            >
              Ends in
            </span>

            <div className="countdown">
              <span>{days}</span>:
              <span>{hours}</span>:
              <span>{minutes}</span>
            </div>

            <div className="time-units">
              <span>Days</span>
              <span>Hours</span>
              <span>Minutes</span>
            </div>
          </>
        ) : status === 'Past' ? (
          <>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '14px',
                color: '#444444',
                marginBottom: '10px',
              }}
            >
              Ended on 
            </span>

            <div className="end-date-text">
              {formattedEndDate} 9:00pm
            </div>
          </>
        ) : null}

        {/* Participate Button */}
        <button className="participate-button">
          <IoMdCheckmarkCircleOutline
            style={{ fontSize: '16px', marginRight: '10px' }}
          />
          Participate Now
        </button>
      </div>
    </div>
  );
};

export default HackathoneCard;
