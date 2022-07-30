import React from 'react'

import Nav from './Nav';

function Header() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">Portfolio</h3>
                <Nav />
            </div>
        </header>
    )
}

export default Header