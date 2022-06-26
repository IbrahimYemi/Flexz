import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Developer() {
  const Messsage = <FontAwesomeIcon className="highlight" icon={faEnvelope} />;

  return (
    <div className="developer">
      <h2>DEVELOPER</h2>
      <div className="developer-picture">
        <div className="aboutme-image">
          <img
            src="https://raw.githubusercontent.com/IbrahimYemi/DeanYemi134/main/IMG-20220622-WA0002.jpg"
            alt=""
          />
        </div>
        <div className="about-me">
          Hi there, I am Yemi, a Nigeria based web developer, with over two
          years of experience with profound knowledge of solving problems,
          creative and dedication to building, maintaining, and optimizing the
          performance of user-centric, high impact website for brand and
          companies
        </div>
      </div>
      <div className="hire-me">
        <a
          className="hire-me-text"
          href="mailto:ibrahimsharafadeen95@gmail.com?Subject=HELLO YEMI,"
          target="blank"
        >
          {Messsage}Hire Me
        </a>
      </div>
    </div>
  );
}
