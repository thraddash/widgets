import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config({ path: '../../../.env' });

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// receive language and text prop
// Anytime language or text changes, useEffect hook will be run
const Convert = ({ language, text }) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: GOOGLE_API_KEY
            }
        });
    }, [language, text]);

    return <div />;
};

export default Convert;