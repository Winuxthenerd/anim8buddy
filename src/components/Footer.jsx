import React from 'react'
import './Footer.css'

function Footer({ setPage }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">▶</span>
            <span className="logo-text">Anim8buddy</span>
          </div>
          <p className="footer-tagline">
            Your favourite anime and cartoons — downloaded, delivered, enjoyed.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
           <h4>Explore</h4>
           <a href="#" onClick={() => setPage('faqs')}>FAQs</a>
           <a href="#" onClick={() => setPage('toonzhub')}>ToonzHub</a>
           <a href="#" onClick={() => setPage('toonzseries')}>ToonzSeries</a>
           <a href="#" onClick={() => setPage('toppicks')}>Top Picks</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Flash Drive Delivery</a>
            <a href="#">Request a Title</a>
            <a href="#">Subscriptions</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Anim8buddy. All rights reserved.</p>
        <p>Made with ❤️ for animation lovers across Nigeria.</p>
      </div>
    </footer>
  )
}

export default Footer