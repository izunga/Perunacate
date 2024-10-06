import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';

const RadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="radio-buttons-container">
            <h2>Select an Option</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Mental Health"
                        checked={selectedOption === 'Mental Health'}
                        onChange={handleOptionChange}
                    />
                    Mental Health
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Fitness Training/Tracking"
                        checked={selectedOption === 'Fitness Training/Tracking'}
                        onChange={handleOptionChange}
                    />
                    Fitness Training/Tracking
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Relationship Advice"
                        checked={selectedOption === 'Relationship Advice'}
                        onChange={handleOptionChange}
                    />
                    Relationship Advice
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Study Buddy/Organization"
                        checked={selectedOption === 'Study Buddy/Organization'}
                        onChange={handleOptionChange}
                    />
                    Study Buddy/ Organization
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Minority Connections"
                        checked={selectedOption === 'Minority Connections'}
                        onChange={handleOptionChange}
                    />
                    Minority Connections
                </label>
            </div>
            {selectedOption && <h3>You selected: {selectedOption}</h3>}
        </div>
    );
};

export default RadioButtons;