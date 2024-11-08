import React from "react";
import "./Services.css";
import { bannerImg } from "../images/index";

const Services = () => {
  return (
    <div className="services-container">
      <img src={bannerImg} alt="Banner de Serviços" className="banner-image" />
      <div className="overlay">
        <section className="intro">
          <h1>Conheça nossos Serviços Oferecidos</h1>
          <ul className="service-list">
            <li>
              Assistência a pessoas físicas de baixa renda levando serviços
              fiscais relacionados ao CPF, ao imposto de renda, ao e-Social
              Doméstico, e muito mais;
            </li>
            <li>
              Assistência a pequenos proprietários rurais oferecendo orientação
              sobre o MEI Rural e a apresentação da declaração do imposto
              territorial rural (a DITR), dentre outros;
            </li>
            <li>
              Assistência ao comércio exterior apoiando pessoas físicas de baixa
              renda e MEI;
            </li>
            <li>
              Assistência a pessoas jurídicas enquadradas como MEI ou
              organizações da sociedade civil;
            </li>
            <li>
              Assistência integrada oferecendo soluções relacionadas aos fiscos
              de todas as esferas federativas para pessoas físicas de baixa
              renda, MEI, OSC e pequenos proprietários rurais.
            </li>
          </ul>

          <h3>Consultoria Contábil:</h3>
          <ul className="service-list">
            <li>
              Suporte sobre contabilidade básica, fluxo de caixa e planejamento
              financeiro.
            </li>
          </ul>

          <h3>Serviços para Pessoas Físicas:</h3>
          <ul className="service-list">
            <li>Cadastro CPF;</li>
            <li>Cadastro Nacional de Obras (CNO);</li>
            <li>Declaração de Imposto de renda;</li>
            <li>
              Isenção do imposto de renda para portadores de moléstias graves;
            </li>
            <li>Destinação do imposto de renda para fundos de direitos;</li>
            <li>Apoio em serviços do e-Social Doméstico;</li>
            <li>Certidão negativa;</li>
            <li>Consulta de dívidas e pendências fiscais;</li>
            <li>Geração de documentos para pagamento de impostos;</li>
            <li>Parcelamentos de dívidas tributárias;</li>
            <li>Orientações sobre acordos de transação tributária;</li>
            <li>
              Auxílios sobre bagagens em viagens ao exterior e encomendas
              internacionais;
            </li>
            <li>Isenção do IPI e IOF para taxistas, pessoas com TEA e PCD;</li>
            <li>Malha e restituição do imposto de renda;</li>
          </ul>

          <h3>Serviços para Pessoas Jurídicas:</h3>
          <ul className="service-list">
            <li>Cadastro Nacional de Imóveis Rurais (CNIR);</li>
            <li>Serviços relativos ao ITR;</li>
            <li>Certidão negativa;</li>
            <li>Consulta de dívidas e pendências fiscais;</li>
            <li>Geração de documentos para pagamento de impostos;</li>
            <li>Parcelamentos de dívidas tributárias;</li>
            <li>Cadastro Nacional de Pessoas Jurídicas (CNPJ);</li>
            <li>Obrigações fiscais do Microempreendedor Individual (MEI);</li>
            <li>Apoio em serviços de comércio exterior para MEI;</li>
            <li>
              Apoio para acesso remoto aos serviços da Receita Federal por meio
              da senha GOV.BR;
            </li>
            <li>Agendamento para atendimento na Receita Federal;</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Services;
