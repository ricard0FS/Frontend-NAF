import React from "react";
import "./Support.css";
import { atendimento } from "../images";

const App = () => {
  return (
    <div className="container-Support">
      <img
        src={atendimento}
        alt="Banner de Serviços"
        className="atendimento-image"
      />
      <div className="overlay">
        <section className="intro">
          <h1>Como Funciona Nosso Atendimento?</h1>

          <h2>Objetivo</h2>
          <p>
            O NAF busca ampliar a conscientização tributária e a cidadania
            ativa, destacando-se os seguintes objetivos:
          </p>
          <ul>
            <li>
              Disponibilizar, gratuitamente, orientação fiscal a pessoas físicas
              de baixa renda, MEI, OSC e pequenos proprietários rurais sem
              acesso a serviços contábeis e/ou que tenham dificuldades no uso de
              meios digitais.
            </li>
            <li>
              Proporcionar aos estudantes que participam do projeto,
              conhecimentos a respeito da função socioeconômica dos tributos.
            </li>
            <li>
              Qualificar o futuro profissional por meio da vivência prática
              acerca do cumprimento das obrigações tributárias.
            </li>
          </ul>
        </section>

        <section className="support-list">
          <h3>Passo A Passo:</h3>
          <p>
            Grande parte dos serviços da Receita Federal pode ser realizada sem
            sair de casa, como por exemplo os serviços para pessoas jurídicas
            são oferecidos exclusivamente em meio digital. O atendimento é
            totalmente <strong>gratuito</strong> e realizado por estudantes, sob
            a supervisão dos professores que coordenam o projeto. O atendimento
            só é realizado com o prévio agendamento.
          </p>

          <h3>Formato De Atendimento:</h3>
          <p>
            Em casos excepcionais de indisponibilidade dos canais digitais,
            responsáveis e representantes de empresas e equiparadas também podem
            protocolar requerimentos, impugnações e recursos urgentes (final de
            prazo, por exemplo) em unidades da Receita Federal. Leve um
            comprovante do erro de sistema (print da tela) para justificar o
            atendimento. Faça o agendamento e apresente os arquivos em formato
            digital, de acordo com os requisitos da Instrução Normativa RFB nº
            2.022/2021.
          </p>
          <p>
            <strong>Prioridades por Lei:</strong> O atendimento prioritário
            independe de agendamento e pode ser solicitado em qualquer unidade.
            Dentre esse grupo, deverá ser oportunizada prioridade destacada para
            as pessoas com 80 anos ou mais.
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;
