import '../styles/App.css';
import React, { useState } from 'react';
import {
  FaBars,
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

  const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const topNavigation = [
    {
      path: './',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   icon: <FaUserAlt />,
    // },
    // {
    //   path: '/register',
    //   name: 'Signup',
    //   icon: <FaRegChartBar />,
    // },
    {
      path: '/teller',
      name: 'Teller',
      icon: <FaCommentAlt />,
    },
  ];

  const bottomNavigation = [
    {
      path: '/admin',
      name: 'Admin',
      icon: <FaUserAlt />,
    },
  ];

  const handleLinkClick = () => {
    if (!isOpen) {
      toggle();
    } 
  };



  return (
    <div className={`side-container ${isOpen ? 'opened-sidebar' : ''}`}>
      <div style={{ width: isOpen ? '200px' : '50px' }} className={`sidebar ${isOpen ? 'opened-sidebar' : ''}`} onClick={handleLinkClick}>
        <div className='top-section'>
          <div className='title-wrap'>
            {/* <h1 style={{ display: isOpen ? 'block' : 'none' }} className='title'>
              QUEUE-ZELCOs
            </h1> */}
            {/* or replace with logo */}
          </div>
          <div className='bars-wrap'>
            <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
          </div>
        </div>
        <div className='navigation'>
          <div className='top-navigation'>
            {topNavigation.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className='link'
                activeClassName='active'
                onClick={handleLinkClick}
              >
                <div className='icon'>{item.icon}</div>
                <div style={{ display: isOpen ? 'flex' : 'none' }} className='link-text'>
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div className='bottom-navigation'>
            {bottomNavigation.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className='bottom-link'
                activeClassName='active'
                onClick={handleLinkClick}
              >
                <div className='icon'>{item.icon}</div>
                <div style={{ display: isOpen ? 'flex' : 'none' }} className='link-text'>
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <main> {children} </main>
    </div>
  );
};

export default Sidebar;
