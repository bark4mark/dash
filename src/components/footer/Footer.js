import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render () {
    const year = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="footer__copyright">
          &copy; {year} Mark Howard
        </div>
        <div className="footer__signiture">
          Made by following a tutorial
        </div>
      </footer>
    )
  }
}

export default Footer;