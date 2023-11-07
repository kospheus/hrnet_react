import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className='logo-text'>HR.                 net</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a className='nav-item' href="/employee-list">Current Employees</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;