import React, { component } from 'react';
import { Link } from 'react-router';

function Navigation() {
  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Google Keep KW 4</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <Link className="mdl-navigation__link" to="dashboard">Dashboard</Link>
          <Link className="mdl-navigation__link" to="login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
