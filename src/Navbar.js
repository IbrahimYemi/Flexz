import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
  const [bar, setBar] = useState(false);
  function handleClick() {
    setBar((prevBar) => !prevBar);
  }
  return (
    <div className="head">
      <h2>FLEXZ</h2>
      <nav className={bar ? 'show' : ''}>
        <Link to="/header">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/developer">
          <li>Developer</li>
        </Link>

        <Link to="/flexzapp">
          <li>Flexz-app</li>
        </Link>
      </nav>
      <FontAwesomeIcon
        icon='fa-duotone fa-bars'
        className={!bar ? 'fa fa-bars' : 'fa fa-times'}
        onClick={handleClick}
      />
    </div>
  );
}
