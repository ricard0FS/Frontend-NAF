import React from "react";
import "./about.css";
import { valuesNaf, visionNaf, missionAbt } from "../images/index";

const About = () => {
  return (
    <div className="naf-container">
      <div className="overlay">
        <section className="intro">
          <h1>Sobre o NAF - Núcleo de Apoio Contábil e Fiscal</h1>
          <h2>Apoio gratuito em questões contábeis e fiscais</h2>
          <p>
            <strong style={{ fontSize: "1.2em" }}>Nossa História:</strong>O
            Núcleo de Apoio Contábil e Fiscal (NAF) foi criado pela Receita
            Federal em parceria com instituições de ensino superior com o
            objetivo de democratizar o acesso a serviços contábeis e fiscais. O
            projeto surgiu para atender a uma demanda social, proporcionando
            suporte gratuito a pessoas de baixa renda, microempreendedores
            individuais (MEIs) e pequenos empresários.
          </p>
        </section>

        {/* Seção Cards */}
        <section className="card-container">
          <div className="card">
            <img src={missionAbt} alt="Nossa Missão" />
            <h3>Nossa Missão</h3>
            <p>
              Oferecemos orientação contábil e fiscal gratuita, ajudando
              contribuintes a cumprirem suas obrigações corretamente, e
              promovendo formação prática para futuros contadores.
            </p>
          </div>
          <div className="card">
            <img src={visionNaf} alt="Nossa Visão e Valores" />
            <h3>Visão e Valores</h3>
            <p>
              Nos tornarmos referência em cidadania fiscal e em formação prática
              de contadores, com valores de ética, responsabilidade social,
              transparência e qualidade no atendimento ao público.
            </p>
          </div>
          <div className="card">
            <img src={valuesNaf} alt="Parcerias" />
            <h3>Parcerias</h3>
            <p>
              O NAF é realizado em parceria com a Receita Federal e instituições
              de ensino, permitindo aos estudantes acesso a situações práticas e
              à comunidade suporte necessário.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
