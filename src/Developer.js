import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Developer() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
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
      <Mailto
        email="ibrahimsharafadeen95@gmail.com"
        subject="Hello & Welcome"
        body="Hello Yemi!"
      >
        <div className="hire-me">Hire Me</div>
      </Mailto>
    </div>
  );
}
