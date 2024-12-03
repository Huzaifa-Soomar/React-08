// Card.js
import React from 'react';
import './card.css';

export const Card = (props) => {
    const { name, occupation, age, location } = props;
    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <h2>{name}</h2>
                <h4>{occupation}</h4>
            </div>
            <div className="profile-card-body">
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Location:</strong> {location}</p>
            </div>
        </div>
    );
};

export default Card;
