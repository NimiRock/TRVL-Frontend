import React from "react";
import Button from "./Button";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <NavLink to="/sign-up">How it works</NavLink>
            <NavLink to="/">Tetimonials</NavLink>
            <NavLink to="/">Careers</NavLink>
            <NavLink to="/">Investors</NavLink>
            <NavLink to="/">Terms of Services</NavLink>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">Support</NavLink>
            <NavLink to="/">Dextinations</NavLink>
            <NavLink to="/">Sponsorship</NavLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <NavLink to="/">Submit Video</NavLink>
            <NavLink to="/">Ambassadors</NavLink>
            <NavLink to="/">Agency</NavLink>
            <NavLink to="/">Influencer</NavLink>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <NavLink to="/">Instagram</NavLink>
            <NavLink to="/">Facebook</NavLink>
            <NavLink to="/">Youtube</NavLink>
            <NavLink to="/">Twitter</NavLink>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <NavLink className="social-logo" to="/">
              TRVL <i className="fab fa-typo3"></i>
            </NavLink>
          </div>
          <small className="website-rights">TRVL &copy; 2020</small>
          <div className="social-icons">
            <NavLink
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </NavLink>
            <NavLink
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </NavLink>
            <NavLink
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
