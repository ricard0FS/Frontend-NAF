import React from "react";
import { useNavigate } from "react-router-dom";
import "./recent.css";
import { missionNaf, objNaf } from "../../images/index";

const RecentCard = () => {
  const navigate = useNavigate();

  return (
    <div className="naf-container">
      <div className="overlay">
        <section className="intro">
          <h1>Bem-vindo ao NAF - Núcleo de Apoio Contábil e Fiscal</h1>
          <h2>Apoio gratuito em questões contábeis e fiscais</h2>
          <p>
            O Núcleo de Apoio Contábil e Fiscal (NAF) é um projeto que oferece
            gratuitamente orientação contábil e fiscal para pessoas físicas de
            baixa renda, MEIs e pequenos empresários.
          </p>
          <p>
            Em parceria com a Receita Federal e instituições de ensino, o NAF
            proporciona aos estudantes de Ciências Contábeis a prática
            profissional, atendendo à comunidade.
          </p>
          <button className="saiba-mais" onClick={() => navigate("/sobre")}>
            Saiba Mais
          </button>
        </section>

        <section className="card-container">
          <div className="card">
            <img src={missionNaf} alt="Nossa Missão" />
            <h3>Nossa Missão</h3>
            <p>
              Promover a cidadania fiscal, ajudando contribuintes a
              regularizarem suas obrigações com segurança e clareza, além de
              fortalecer o aprendizado dos futuros profissionais de
              contabilidade.
            </p>
          </div>
          <div className="card">
            <img src={objNaf} alt="Nosso Objetivo" />
            <h3>Nosso Objetivo</h3>
            <p>
              Nosso objetivo é ajudar os cidadãos e empresários de baixa renda a
              terem acesso ao conhecimento contábil, contribuindo para a sua
              regularização fiscal e crescimento sustentável.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecentCard;
