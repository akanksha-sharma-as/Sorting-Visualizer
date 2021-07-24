import React from 'react';
import '../styles/footer.css';
// import styled from 'styled-components';
// import { Hr, Link, FooterDiv } from '../styles/styledComp/footerStyles.js';

function Footer() {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/akanksha-s-845a741a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Akanksha Sharma
        </a>
      </section>
    </footer>
  );
}

export default Footer;