[![Node version][node-shield]][node-url]
[![npm version][npm-shield]][npm-url]
[![GitHub commit activity][commits-shield]][commits-url]

# Widgets App

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#accordion-widget-usestate">Accordion Widget (useState)</a></li>
        <li><a href="#wikipedia-search-widget-usestate-useeffect">Wikipedia Search Widget (useState, useEffect)</a></li>
        <li><a href="#dropdown-widget-usestate-useeffect-useref">Dropdown Widget  (useState, useEffect, useRef)</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#starting-the-app">Starting the App</a></li>

  </ol>
</details>

## About the Project

## Accordion Widget useState
<details>
  <summary>/src/index.js & /src/App.js</summary>
 
### /src/App.js
 ```node
 import React from 'react';

export default () => {
    return <h1>Widgets App</h1>;
}
```
### /src/index.js
```node
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));
```
</details>

<details>
  <summary>define items array in App.js, pass item as prop to Accordion component </summary>
 
### /src/App.js
 ```node
 import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

const App = () => {
    return ( 
        <div>
            <Accordion items={items} />
        </div>
    );
};
export default App;
```
### /src/components/Accordion.js    
### OUTPUT: 3  
```node
import React from 'react';

const Accordion = ({ items }) => {
    return <h1>{items.length}</h1>;
};

export default Accordion;
```
</details>

<details>
  <summary>Render items list using map function, use {item.title} as key</summary>
 
### /src/components/Accordion.js 
```node
import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        return <div key={item.title}>
            <div className="title active">
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </div>
    });

    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;
```
</details>

<details>
  <summary>Add semantic ui css in header</summary>
  
 ### public/index.html 
 ```node
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
 ```
</details>

<details>
  <summary>Remove double border created by div element by using React.fragment</summary>
 
### /src/components/Accordion.js 
```node
import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map((item) => {
        return (
          <React.fragment key={item.title}>
            <div className="title active">
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className="content active">
              <p>{item.content}</p>
            </div>
          </React.fragment>
        );
    });
    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;
```
</details>

<details>
  <summary>create onClick event handler, add index</summary>
  
 ### /src/components/Accordion.js
 ```node
 import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    className="title active"
                    onClick={() => console.log('Title Clicked', index)}
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
    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;
 ```
</details>

<details>
  <summary>Add helper method onTitleClick to function component</summary>
  
 ### /src/components/Accordion.js
 ```node
 import React from 'react';

const Accordion = ({ items }) => {
    const onTitleClick = (index) => {
        console.log('Title clicked', index);
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
    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;
 ```
</details>

<details>
  <summary>useState hook system</summary>

|                | Class Components                      |   | Function Components  |
|:---------------|:--------------------------------------|:--|:---------------------|
| Initialization | state = { activeIndex:0 }             |-> | useState(0);         |
| Reference      | this.state.activeIndex                |-> | activeIndex;         |
| Updates        | this.setState({ activeIndex: 10 })    |-> | setActiveIndex(10);  |

### Multiple states components
|                | Class Components                              |   | Function Components                                |
|:---------------|:----------------------------------------------|:--|:---------------------------------------------------|
| Initialization | state = { activeIndex:0, term: '' }           |-> | const [activeindex, setActiveIndex] = useState(0); |
|                |                                               |   | const [term, setTerm] = useState('');              |
| Reference      | this.state.activeIndex;                       |-> | activeIndex;                                       |
|                | this.state.term;                              |   | term;                                              |
| Updates        | this.setState({ activeIndex: 10, term: 'hi' })|-> | setActiveIndex(10);                                |
|                |                                               |   | setTerm('hi');                                     |

### Excercise: useState click counter
```node
import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
    const onButtonClick = () => {
        
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count:</h1>
        </div>
    );
}
```

```node
 import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {

// 1.) whenever you call useState, get back two element inside of an array destructuring     
    const [count, setCount] = useState(0);
    
    const onButtonClick = () => {
        setCount(count + 1);
    };
   
// 2.) update JSX block <h1>Current Count: {count}, referencing count from the useState,
// 3.) onClick event, update setCount(count + 1);, once called, entire component re-render

    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count: {count}</h1>
        </div>
    );
}
```
</details>

## Wikipedia Search Widget useState useEffect
```
https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=SEARCHTERM
```

<details>
  <summary>Create Search component & render to App.js</summary>

### /components/Search.js
```node
import React from 'react';

const Search = () => {
    return <h1>Search</h1>;
}

export default Search; 
```

### App.js
```node
import React from 'react';
import Search from './components/Search';

const App = () => {
    return ( 
        <div>
            <Search/>
        </div>
    );
};
export default App;
```
</details>
<details>
  <summary>Add semantic ui, assign value prop + onChange event handler </summary>

### Search.js
```node
import React, { useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" />
                </div>
            </div>
        </div>
    );
}

export default Search; 
```
### assign value prop to Input form, assign onChange event handler to setter func setTerm of useState
```node
import React, { useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
```
</details>

<details>
  <summary> useEffect hook to detect term has changed </summary>
  
```
component rendered 1st time only, 2nd argv empty array []
component rendered 1st time, whenever it re-renders + initial render, no 2nd argv
component rendered 1st time & whenever it re-render + some data have changed, 2nd argv [data] array
```
### 3 Options async await for useEffect
#### Option 1 (helper function)
```node
// declare temporary helper function const search, evoke function search()  
    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php');
        }
        search();
    }, [term]);
```
#### Option 2 (function wrapped with parenthesis, follow by () to evoke function
```node
// declare a function, wrap async with parenthesis, follow by () to immediately evoke the function 
    useEffect(() => {
        (async () => {
            await axios.get('https://en.wikipedia.org/w/api.php');
        })();

    }, [term]);
```
#### Option 3 (axios promises)
```node
// use axios promises 
// making a request with axios, returns a promise
// chain on with .then stmt, arrow function will be envoked with the response from the api
    useEffect(() => {
        axios.get('https://en.wikipedia.org/w/api.php')
            .then((response) => {
                console.log(response.data);
            });

    }, [term]);
```    

</details>

<details>
  <summary> Convert API to baseURL + params </summary>
 
```node
useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
        }
        
        search();
    }, [term]);
```
</details>

<details>
  <summary> Extract response.data, pass data to new useState object setResults, add case if term is defined </summary>
 
```node
const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };
 
        if (term) {
            search();
        }
    }, [term]);
```
</details>

<details>
  <summary> Mapp out data array to JSX block, add key prop key={result.pageid}  </summary>
 
```node
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };
        
        if (term) {
            search();
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}    
                    </div>
                    {result.snippet}
                </div>
            </div>
        )

    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;
```
</details>

<details>
  <summary> Output string result.snippet to JSX </summary>
 
### Option 1: Note - Vulnerable to XSS Attack 
```node
 const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}    
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    });
```

### Option 2: Replace html sytax with empty string
```
 const renderedResults = results.map((result) => {
        const stripedHtml = result.snippet.replace(/<[span class="searchmatch">*</span]+>/g, '');
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}    
                    </div>
                    {stripedHtml}
                </div>
            </div>
        )
    });
```
</details>

<details>
  <summary> Add ui button & a href link  </summary>
 
```node
const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}    
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    });
```
</details>

<details>
  <summary> Throttle API request, wait for 500ms </summary>
 
### ToDo: 
```
- set a timer to search in 500ms
- cancel previous timer
- set a timer to search in 500ms
- last timer created and executes

setTimeout(() => console.log('hi there'), 10000)
OUTPUT: 117 identifier

clearTimeout(117)
```

```node
useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };
        
        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [term]);
```
</details>

<details>
  <summary> fix 500ms delay if term is defined </summary>
 
### if (term && !results.length) 
```node
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };
        
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}    
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;
```
</details>

<details>
  <summary> Fix warning missing dependency 'results.length in useEffect array </summary>

### Add results.length to dependency array  
```
Anytime you make a reference to a state or props in useEffect, Eslint wants you to add a reference in useEffect dependecy array  
useEffect dependency array controls when useEffect gets run.
Adding results.length will trigger useEffect to re-run, since the initial value of results.length started with 0 and later changed to another valueh
```

### Solution: use debouncedTerm - setup a timer, cancel timer
- create new state debouncedTerm 
- create 2 seperate useEffect functions     
-   
- useEffect 1: for term  
- user start typing: immediately update term , 
  - set timer to update debouncedTerm
- user start typing: cancel previous timer
  - immediately update term
  - set a timer to update debouchedTerm
```node
const Search = () => {
    const [term, setTerm] = useState('');
    // create state debouncedTerm
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        // return cleanup function to reset timerId
        return () => {
            clearTimeout(timerId);
        };
    }, [term]);
```
#### Summary:  
```
1st useEffect will run everytime term changes, a change will be queued up to debouncedTerm and executes in 1 second
if user enter input too quickly in term, timer is clear and setup a new timer
if debounchedTerm went through, it will run the 2nd useEffect, if search term is not empty, it will make a call search
to wikipedia and updates the results piece of state.
```

- useEffect 2: for debouncedTerm
-
- user stop typing for 500ms: debounchedTerm updated
- state update causes re-render: useEffect watching debouncedTerm runs, data fetched 
```node
useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            });

            setResults(data.query.search);
        };
        if (term){
            search();
        }
    }, [debouncedTerm]);
```
</details>

<details>
  <summary> Overview Search.js </summary>
 
```node
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            });

            setResults(data.query.search);
        };
        if (term){
            search();
        }
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}    
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;
```
</details>

## Dropdown Widget useState useEffect useRef
<details>
  <summary> blah </summary>
  
</details>  

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
1. node v14.15.5 installed
2. npm 6.14.11 installed


  
### Starting the App

1. Clone the repo
   ```sh
   git clone https://github.com/thraddash/widgets.git
   ```
2. npm install
   ```
   install npm modules from package.json
   ```
3. npm start
   ```
   Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
   ``` 
   
<!-- MARKDOWN LINKS & IMAGES -->
[node-shield]: https://img.shields.io/badge/node-v14.15.5-blue
[node-url]: https://nodejs.org/
[npm-shield]: https://img.shields.io/badge/npm-v6.14.11-orange
[npm-url]: https://www.npmjs.com/package/npm-install
[commits-shield]: https://img.shields.io/badge/commits-38-green.svg
[commits-url]: https://img.shields.io/github/commit-activity/y/thraddash/widgets
[product-screenshot]: /src/images/mockup.png
