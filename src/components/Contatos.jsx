import { useState } from "react";
import { motion } from "framer-motion";
import "./Contatos.css";

const Contatos = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Monta o link mailto com os dados do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via site - ${nome}`);
    const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`);
    window.location.href = `mailto:arthurfriburgo234@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      className="contatos"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="form-contato">
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Seu nome"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Seu email"
          />
        </label>
        <label>
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            placeholder="Sua mensagem"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </motion.section>
  );
};

export default Contatos;
