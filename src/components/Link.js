import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        //prevent full page to reload by default
        event.preventDefault();
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>;
};

export default Link;