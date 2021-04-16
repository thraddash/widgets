import React, { useState, useEffect } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    //hiding and showing option list
    const [open, setOpen] = useState(false);

    //setup useEffect
    //setup addEventListner to run one time by adding an empty array in the 2nd argv of the arrow function
    useEffect(() => {
        document.body.addEventListener('click', () => {
            console.log('CLICK!!!');            
        });
    }, []);
    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;