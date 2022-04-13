import react from 'react';

const Footer = () => {
    return (
        <p className="app-footer">Copyright all rights reserved-{currentYear()}</p>
    )
};

const currentYear = () => {
  return new Date().getFullYear();
};

export default Footer;