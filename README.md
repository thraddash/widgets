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
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Starting the App">Starting the App</a></li>

  </ol>
</details>

## About the Project


### Modules Used


### Build step
<details>
  <summary>/src/index.js /src/App.js</summary>
 
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
    
    const [count, setCount] = useState(0);
    
    const onButtonClick = (count) => {
        count = count + 1
        setCount(count)
    };
    
    return (
        <div>
            <button onClick={() => onButtonClick(count)}>Click Me!</button>
            
            <h1>Current Count: {count}</h1>
        </div>
    );
}
```
</details>

<details>
  <summary>blah blah</summary>
  
 ### /src/blah blah
 ```node
 
 ```
 ### multiple state components
 
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
