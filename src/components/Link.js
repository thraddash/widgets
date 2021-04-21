import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // add event metaKey for apple, crtlKey for window (middle mouse button), open link to new window tab
        if (event.metaKey || event.crtlKey) {
            return;
        }
        //prevent full page to reload by default
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>;
};

export default Link;