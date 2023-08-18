import React, { useState } from 'react';
import { FaUserAlt, FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-wrap'>
        <div className='dropdown-trigger' onClick={toggleMenu}>
          <FaUserAlt />
          <FaCaretDown className={isMenuOpen ? 'open' : ''} />
        </div>
        {isMenuOpen && (
          <div className='dropdown-content'>
            <ul className='dropdown-list'>
              <li>Switch User</li>
              <Link to={'/admin'}>Admin</Link>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
