import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navStyles = {
    '--bs-nav-link-color': 'var(--bs-warning)',
    '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
    '--bs-nav-pills-link-active-bg': 'var(--bs-light)',
    'maxWidth': '400px',
    'margin': '30px 10px 0 10px'
  };

  return (
    <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-secondary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={navStyles}>
      <li className="nav-item" role="presentation">
        <NavLink exact to="/" className="nav-link rounded-5" activeClassName="active">HOME</NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink exact to="/skills" className="nav-link rounded-5" activeClassName="active">SKILLS</NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink to="/projects" className="nav-link rounded-5" activeClassName="active">PROJECTS</NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink to="/contact" className="nav-link rounded-5" activeClassName="active">CONTACT</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
