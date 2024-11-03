import React from "react";
import "./Partners.css";
import { parceria, unipac, srcNaf, receitaF } from "../images/index";

const Partners = () => {
  return (
    <div className="services-container">
      <img src={parceria} alt="Banner de Serviços" className="banner-image" />
      <div className="overlay">
        <section className="intro">
          <h1>Os nossos Parceiros</h1>
          <h3>Organizações com quem temos parcerias diretas</h3>
          <h3>Clique no parceiro para conhecer mais!</h3>

          <section className="card-container">
            <a
              href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/institucional/quem-e-quem/unidades-regionais-e-locais/delegacias-da-receita-federal-drf/minas-gerais"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={receitaF} alt="Nossa Missão" />
              <p>
                A orientação e supervisão apresentadas pela Receita Federal
                asseguram que as atividades do NAF estejam alinhadas com as
                práticas fiscais e tributárias atuais.
              </p>
            </a>

            <a
              href="https://unipacuberlandia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={unipac} alt="Nossa Visão e Valores" />
              <p>
                "Em nome da Universidade Presidente Antônio Carlos (UNIPAC),
                manifesto meu total apoio ao trabalho desempenhado pelo Naf. É
                inspirador ver a dedicação e o comprometimento de todos os
                envolvidos, sempre buscando o crescimento e a inovação. Estamos
                juntos nessa jornada, e reforço nossa parceria, acreditando que,
                através da união de esforços, alcançaremos grandes resultados.
                Contem com nossa colaboração para que o Naf continue a
                prosperar, fortalecendo cada vez mais sua missão."
              </p>
            </a>

            <a
              href="https://crcmg.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={srcNaf} alt="Parcerias" />
              <p>
                "Estamos comprometidos em oferecer recursos para que os alunos
                se tornem profissionais éticos e capacitados." O CRC ajuda o NAF
                com recursos educacionais e eventos, fomentando a ética
                profissional e a formação contínua dos alunos.
              </p>
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Partners;
