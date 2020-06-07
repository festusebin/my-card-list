import React from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Router>
            <Link to='/'>Home</Link>
          </Router>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Contact Card List',
  icon: 'fab fa-user'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
