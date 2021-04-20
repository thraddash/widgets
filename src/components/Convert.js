import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config({ path: '../../../.env' });

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// receive language and text prop
// Anytime language or text changes, useEffect hook will be run
const Convert = ({ language, text }) => {
    //store translated text, default value empty string
    const [translated, setTranslated] = useState('');

    // set timer to update debounchedText 500ms, return cleanup function to cancel timer
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        // helper function to use await axios
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: GOOGLE_API_KEY
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
      <div>
          <h1 className="ui header">{translated}</h1>
      </div>  
    );
};

export default Convert;