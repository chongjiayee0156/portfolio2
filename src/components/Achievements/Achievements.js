import React from 'react';
import './Achievements.scss'; // Include your CSS/SCSS file for styling
import achievementsData from './Achievements.json'; // Import your achievements data

export default function Achievements() {
    return (
        <div className="achievements">
            {/* <h1>Achievements</h1> */}
            <div className="timeline">
                {achievementsData.achievements.map((achievement, index) => (
                    <div key={index} className="achievement">
                        <div className="date">{achievement.date}</div>
                        <div className="content">
                            <h2>{achievement.title}</h2>
                            <p>{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
