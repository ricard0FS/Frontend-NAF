import React from "react";
import "./footer.css";
import { logoNaf } from "../../images";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={logoNaf} alt="Logo" />
              <p>Acompanhe ainda mais nas redes sociais!</p>
            </div>
            <div className="icons">
              <div className="icon-item">
                <a
                  href="https://www.instagram.com/redenaf?igsh=M2xsbHp0NTcxamt4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="icon-item">
                <a
                  href="https://www.facebook.com/redenaf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 NAF WebSite. Desenvolvido por Alunos ADS.</span>
      </div>
    </>
  );
};

export default Footer;
