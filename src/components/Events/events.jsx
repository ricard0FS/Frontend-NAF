import React from "react";
import "./events.css";
import {
  parceria,
  unipac,
  srcNaf,
  receitaF,
  noticia,
  blog,
  writing,
  interview,
} from "../images/index";

const Events = () => {
  return (
    <div className="services-container">
      <img src={noticia} alt="Banner de Serviços" className="banner-image" />
      <div className="overlay">
        <section className="intro">
          <h1>Nosso Blog de Notícias</h1>
          <h3>Fique por dentro das atualizações do NAF e temas contábeis!</h3>
          <p>
            Acompanhe nossas últimas notícias e não perca os conteúdos
            exclusivos em nosso canal do YouTube!
            <a
              href="https://www.youtube.com/@RedeNAF"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acesse o canal da Rede NAF
            </a>{" "}
            e fique atualizado!
          </p>
          <h3>Clique na notícia para explorar!</h3>

          <section className="card-container">
            <a
              href="https://www.gov.br/receitafederal/pt-br/assuntos/noticias"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={blog} alt="Receita Federal" />
              <h3>Notícias Receita Federal</h3>
              <p>
                Descubra as principais notícias e assuntos do momento sobre a
                Receita Federal.
              </p>
            </a>

            <a
              href="https://blogtributario.com.br/2016/06/16/voce-conhece-o-nucleo-de-apoio-contabil-e-fiscal-tv-receita-explica-em-video/"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={writing} alt="Nossa Visão e Valores" />
              <h3>Blog Tributário</h3>
              <p>
                Você conhece o Núcleo de Apoio Contábil e Fiscal? A TV Receita
                explica, saiba mais! .
              </p>
            </a>

            <a
              href="https://blog.cuboz.com.br/tag/naf/"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={interview} alt="Parcerias" />
              <h3>Parcerias Educacionais</h3>
              <p>
                Entenda como a Receita Federal e outras instituições fortalecem
                o NAF com recursos e eventos.
              </p>
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Events;
