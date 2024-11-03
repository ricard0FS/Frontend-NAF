import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { logoNaf } from "../../images";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
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
              {/* 
              <div className="icon-item">
                <FaLocationDot />
                <p>
                  Endereço: Av. Cipriano Del Fávero, 1015 - Centro, Uberlândia - MG, 38400-106
                </p>
              </div>
              <div className="icon-item">
                <BsFillTelephoneFill />
                <p>Telefone: (34) 3291-2100</p>
              </div>
              <div className="icon-item">
                <MdEmail />
                <p>E-mail: wesley@unipac.com.br</p>
              </div>
              */}
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
