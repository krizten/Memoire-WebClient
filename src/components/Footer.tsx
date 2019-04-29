import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Footer: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className ? `${className} footer` : 'footer'}>
      <p className="footer__copyright">&copy; Mémoire, 2019</p>
      <div className="footer__corporate">
        <Link to="/terms-and-conditions">
          <p className="footer__corporate-terms">Terms & Conditions</p>
        </Link>
        <Link to="/privacy-policy">
          <p className="footer__corporate-privacy">Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
};
