import React from 'react';
import styles from './footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.md3}`}>
            <h4>About</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Our story</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.md3}`}>
            <h4>Company</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Our services</a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.md3}`}>
            <h4>Resources</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.md3}`}>
            <h4>Subscribe</h4>
            <form action="#">
              <input style={{ backgroundColor: 'transparent' }} type="email" placeholder="Enter email address" required />
              <div className={styles.subscribeForm}>
                <button className={styles.subscribeBtn}>Subscribe</button>
              </div>
            </form>
            <p>Get digital marketing updates in your mailbox</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className={`${styles.socialIcon} fab fa-twitter`} /></a>
              <a href="#"><i className={`${styles.socialIcon} fab fa-facebook-f`} /></a>
              <a href="#"><i className={`${styles.socialIcon} fab fa-instagram`} /></a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col12}>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;