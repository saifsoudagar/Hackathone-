import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HackathoneCard from './HackathoneCard';
import Search_Filter from './Search_Filter';

// Define your styles separately or use a CSS-in-JS library for better readability
const containerStyle = {
  width: '1440px',
  height: 'auto',
  backgroundColor: '#003145',
};

const headerStyle = {
  backgroundColor: '#002A3B',
  height: '324px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '50px',
};

const headerTitleStyle = {
  fontSize: '28px',
  fontWeight: '600',
  lineHeight: '40px',
  color: 'white',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '60px 20px',
  padding: '20px',
  marginTop: '40px',
};

const noHackathonsStyle = {
  color: '#F8F9FD',
  textAlign: 'center',
  width: '100%',
};

function HackathoneSection() {
  const hackathons = useSelector((state) => state.hackathons);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (type, value) => {
    if (type === 'status') {
      setSelectedStatuses((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (type === 'label') {
      setSelectedLabels((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  const handleRemoveFilter = (type, value) => {
    if (type === 'status') {
      setSelectedStatuses((prev) => prev.filter((item) => item !== value));
    } else if (type === 'label') {
      setSelectedLabels((prev) => prev.filter((item) => item !== value));
    }
  };

  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesSearch = hackathon.name?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(hackathon.status?.toLowerCase());
    const matchesLabel = selectedLabels.length === 0 || selectedLabels.includes(hackathon.label?.toLowerCase());
    return matchesSearch && matchesStatus && matchesLabel;
  });

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <h3 style={headerTitleStyle}>Explore Challenges</h3>
        <Search_Filter 
          searchTerm={searchTerm}
          selectedStatuses={selectedStatuses}
          selectedLabels={selectedLabels}
          onSearch={handleSearch}
          onSort={handleSort}
          onRemoveFilter={handleRemoveFilter} // Pass the onRemoveFilter function
        />
      </div>

      {/* Hackathons Cards Display */}
      <div style={cardContainerStyle}>
        {filteredHackathons.length > 0 ? (
          filteredHackathons.map((hackathon) => (
            <HackathoneCard
              key={hackathon.id}
              img={hackathon.img}
              name={hackathon.name}
              description={hackathon.description}
              status={hackathon.status}
              level={hackathon.level}
              startDate={hackathon.startDate}
              endDate={hackathon.endDate}
            />
          ))
        ) : (
          <p style={noHackathonsStyle}>
            No hackathons available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default HackathoneSection;
