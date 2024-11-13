import React, { useState } from "react";
import "./contact.css";
import { contato, location } from "../images/index";
import Input from "../Utils/Input/input";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/mail/send/${formData.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          mensagem: "",
        });
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <Input
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
            <Input
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Mensagem"
              name="mensagem"
              type="textarea"
              rows={8}
              value={formData.mensagem}
              onChange={handleInputChange}
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
              Uberlândia - MG, 38400-106 <br />
              <strong>Telefone:</strong> (34) 3291-2100 <br />
              <strong>E-mail:</strong> Gestao@unipacuberlandia.com.br
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
