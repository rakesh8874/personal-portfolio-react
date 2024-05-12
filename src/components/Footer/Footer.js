import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rakesh</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/rakesh-tiwari-0a87811b7/" className="footer__social-link" target="_blank">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/rakesh8874" className="footer__social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.instagram.com" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; TiwariTech. Allrights reserved</span>
            </div>
        </footer>
    )
}

export default Footer