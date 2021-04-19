import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    //hiding and showing option list
    const [open, setOpen] = useState(false);

    //useRef on parent "ui form"
    const ref = useRef();

    //setup useEffect
    //setup addEventListner to run one time by adding an empty array in the 2nd argv of the arrow function
    useEffect(() => {
        const onBodyClick = (event) =>{
            //ref.current.contains checks if element clicked on is inside the ref "ui form"
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, { capture: true });
        //clean up function
        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
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
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <p></p>
                <h4 className={`ui ${selected.value} header`}>{selected.label}</h4>
            </div>
        </div>
    );
};

export default Dropdown;