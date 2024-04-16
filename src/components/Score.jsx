import React from 'react';


function Score(props) {
    return (
        <div className="score-container">
            {props.scores.map((score, index) => (
                <div key={index} className="score">
                    <p>Test Date: {score.date}</p>
                    <p>Test Score: {score.score}</p>
                </div>
            ))}
        </div>
    );
}

export default Score;