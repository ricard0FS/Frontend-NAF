import React from "react";
import "./policies.css";
import { coletaDados, policies } from "../images/index";

const Policies = () => {
  return (
    <div className="services-container">
      <img
        src={policies}
        alt="Banner de Política de Privacidade"
        className="banner-image"
      />
      <div className="overlay">
        <section className="intro">
          <h1>Nossa Política de Privacidade e uso de dados</h1>
          <p>
            <h2>Coleta de Dados</h2> A legislação normalmente estabelece quais
            informações pessoais (como nome, CPF, e-mail) são retiradas dos
            usuários e por quais motivos. Alterações na Política Uso das
            Informações: As informações coletadas são utilizadas para prestar
            serviços de apoio fiscal e contábil, além de fins educacionais.
            Menções sobre o armazenamento dos dados e as medidas de segurança
            adotadas para proteger essas informações contra acessos não
            autorizados devem ser incluídas.
          </p>
          <p>
            <h2>Direitos dos usuários:</h2> O funcionamento do Núcleo de Apoio
            Fiscal (NAF) depende fundamentalmente do Lei Geral de Proteção de
            Dados (LGPD), pois estabelece diretrizes que garantem a proteção das
            informações pessoais dos usuários. Para oferecer serviços de
            orientação fiscal, o NAF coleta dados como nome, CPF e e-mail; a
            conformidade com an LGPD garante que esses dados sejam tratados de
            forma segura e transparente. Reservamo-nos o direito de modificar
            esta política de privacidade a qualquer momento. Quaisquer
            alterações serão comunicadas através de aviso em nosso site.
          </p>
          <section className="card-container-Policies">
            <div className="card-Policies">
              <img src={coletaDados} alt="Nossa Missão" />
              <h3>Uso de Informações</h3>
              <p>
                As informações coletadas são utilizadas para prestar serviços de
                apoio fiscal e contábil, além de fins educacionais. Menções
                sobre o armazenamento dos dados e as medidas de segurança
                adotadas para proteger essas informações contra acessos não
                autorizados devem ser incluídas.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Policies;
