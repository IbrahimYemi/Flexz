import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const Twitter = <FontAwesomeIcon className="highlight" icon={faTwitter} />;
  const Github = <FontAwesomeIcon className="highlight" icon={faGithub} />;
  const Instagram = (
    <FontAwesomeIcon className="highlight" icon={faInstagram} />
  );
  const Linkedin = <FontAwesomeIcon className="highlight" icon={faLinkedin} />;
  return (
    <div className="footer">
      <div className="social">
        <a href="https://github.com/IbrahimYemi">{Github}</a>
        {Twitter}
        {Github}
        {Instagram}
        {Linkedin}
      </div>
      <div className="hr"></div>
      <div className="copyright">&copy; of Ibrahim Yemi 2022</div>
    </div>
  );
}
