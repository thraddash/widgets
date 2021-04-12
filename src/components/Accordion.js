import React, { useState } from 'react';
// update state in React without setState, use Hook System 
// { useState } allows state variables in a functional component

const Accordion = ({ items }) => {
    // destructure two values out of useState
    // activeIndex - reference to useState
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        // updates state to current value, re-render
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    className="title active"
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return <div className="ui styled accordion">
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>;
};

export default Accordion;
