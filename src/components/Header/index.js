import React from 'react'
import './Header.css';

function Header({collapsed}) {
    return (
        <header className={collapsed ? 'collapsed' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
                </a>
            </div>
            <div className="header-user-img">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    )
}

export default Header
