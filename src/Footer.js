import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faInstagram,
  falinkedin,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const Twitter = <FontAwesomeIcon icon={faTwitter} />;
  const Github = <FontAwesomeIcon icon={faGithub} />;
  const Instagram = <FontAwesomeIcon icon={fInstagram} />;
  const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  return (
    <div className="footer">
      <div className="social">
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
