import { useEffect, useState } from 'react';
//add useEffect when listening to event handler, navEvent

//set useEffect 2nd argv empty array, to run one time
const Route = ({ path, children }) => {
    //new useState to update Route component to re-render itself
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    //return window.location.pathname === path ? children : null;
    return currentPath === path ? children : null;
    
};

export default Route;