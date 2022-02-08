import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <section>
        <Link className='Navbar__Link' to='/'>Products</Link>
        <Link className='Navbar__Link' to='/basket'>Basket</Link>
      </section>
    </nav>
  );
};

export default Navbar;
