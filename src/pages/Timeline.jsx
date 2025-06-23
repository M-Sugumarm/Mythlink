import React from 'react';
import { godTimeline } from '../data/godTimelineData';
import GodNode from '../components/GodNode';
import '../styles/Timeline.scss';
import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const navigate = useNavigate();
  return (
    <div className="timeline-page">
      <h1 className="timeline-title">🌟 Mythology Timeline</h1>
      <div className="timeline-vertical">
        {godTimeline.map((category) => (
          <div className="category-block" key={category.id}>
            <h2>{category.title}</h2>
            <div className="god-flow-vertical">
              {category.gods.map((god, index) => (
                <div key={index} onClick={() => navigate(`/god/${god.name}`)} style={{cursor:'pointer'}}>
                  <GodNode name={god.name} role={god.role} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
