import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Chinese',
    value: 'zh',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  
  //for input
  const [text, setText] = useState('');

  return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
        </div>
        <p></p>
        <Dropdown
            label="Select a Lanaguage"
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
        />
        <hr />
        <h3 className="ui header">Outut:</h3>
        <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;