import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>About</h3>
            <ul>
              <li>Out story</li>
              <li>Awards</li>
              <li>Our Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Company</h3>
            <ul>
              <li>Our services</li>
              <li>Clients</li>
              <li>Contact</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Subscribe</h3>
            <form>
              <input type="email" placeholder="Enter email address" />
              <button type="submit">Subscribe</button>
              <p>Get digital marketing updates in your mailbox</p>
            </form>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;