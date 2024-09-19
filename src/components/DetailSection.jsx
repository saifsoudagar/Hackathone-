import React from 'react';
import DetailCard from './DetailCard';
import photos from '../assets (1)/photo';
import './styles/DetailSection.css'

const { icon4, icon5, icon6, icon7 } = photos;

function DetailSection() {
  return (
    <div className="detail-section">
      <h2 className="detail-section__heading">
        Why Participate in{' '}
        <span className="highlight">AI Challenges?</span>
      </h2>

      <div className="detail-section__grid">
        <DetailCard
          icon={icon4}
          heading={'Prove your skills'}
          para="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
        />
        <DetailCard
          icon={icon7}
          heading={'Learn from community'}
          para="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
        />
        <DetailCard
          icon={icon6}
          heading={'Challenge yourself'}
          para="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
        />
        <DetailCard
          icon={icon5}
          heading={'Earn recognition'}
          para="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
        />
      </div>
    </div>
  );
}

export default DetailSection;
