import React from 'react';
import styles from './footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Our story</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Company</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Our services</a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Resources</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Subscribe</h4>
            <form action="#">
              <input type="email" placeholder="Enter email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p>Get digital marketing updates in your mailbox</p>
            <div className="social-icons">
              <a href="#"><i className={`fab fa-twitter ${styles.socialIcon}`} /></a>
              <a href="#"><i className={`fab fa-facebook-f ${styles.socialIcon}`} /></a>
              <a href="#"><i className={`fab fa-instagram ${styles.socialIcon}`} /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;