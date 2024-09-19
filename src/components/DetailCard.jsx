import React from "react";
import "./styles/DetailCard.css"; // Import the CSS file

function DetailCard({ icon, heading, para }) {
  return (
    <div className="detail-card">
      <img src={icon} alt="icon" className="detail-card__icon" />
      <h4 className="detail-card__heading">{heading}</h4>
      <p className="detail-card__para">{para}</p>
    </div>
  );
}

export default DetailCard;
