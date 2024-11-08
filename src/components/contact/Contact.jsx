import React from "react";
import "./contact.css";
import { contato, location } from "../images/index";
import Input from "../Utils/Input/input";

const Contact = () => {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com.br/maps/place/Unipac/@-18.9132904,-48.2798595,17z/data=!4m14!1m7!3m6!1s0x94a44522278ea67d:0xb579cb4f96c7eb02!2sUnipac!8m2!3d-18.9132904!4d-48.2772846!16s%2Fg%2F11gphrpl24!3m5!1s0x94a44522278ea67d:0xb579cb4f96c7eb02!8m2!3d-18.9132904!4d-48.2772846!16s%2Fg%2F11gphrpl24?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <div className="naf-container">
      <div className="overlay">
        <section className="intro">
          <h1>Entre em contato conosco!</h1>

          <p>
            Estamos aqui para ajudar! Se você tiver alguma dúvida ou precisar de
            assistência, não hesite em nos contatar através do formulário
            abaixo. Nossos especialistas estão prontos para oferecer o suporte
            necessário.
          </p>

          <form className="contact-form">
            <Input label="Nome" name="name" required />
            <Input label="E-mail" name="email" type="email" required />
            <Input label="Telefone" name="phone" type="tel" required />
            <Input
              label="Mensagem"
              name="message"
              multiline
              rows={8}
              required
            />
            <button type="submit" className="saiba-mais">
              Enviar
            </button>
          </form>
        </section>

        <section className="card-container">
          <div className="card" onClick={handleLocationClick}>
            <img src={location} alt="Localização" />
            <h3>Onde nos encontrar</h3>
            <p>
              Sinta-se à vontade para nos visitar pessoalmente! Estamos
              localizados na Av. Cipriano Del Fávero, 1015 - Centro, Uberlândia
              - MG. Clique no Card e venha nos conhecer!
            </p>
          </div>
          <div className="card">
            <img src={contato} alt="Contato" />
            <h3>Informações de contato</h3>
            <p>
              <strong>Endereço:</strong> Av. Cipriano Del Fávero, 1015 - Centro,
              Uberlândia - MG, 38400-106
              <br />
              <strong>Telefone:</strong> (34) 3291-2100
              <br />
              <strong>E-mail:</strong> Gestao@unipacuberlandia.com.br
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
