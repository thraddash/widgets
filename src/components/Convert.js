import React, { useState, useEffect } from 'react';

// receive language and text prop
// Anytime language or text changes, useEffect hook will be run
const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log('New language or text')
    }, [language, text]);

    return <div />;
};

export default Convert;