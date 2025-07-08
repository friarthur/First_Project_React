import { motion } from "framer-motion";
import "./Linguagens.css";

const skills = {
  Frontend: [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 100 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 65 },
    { name: "TypeScript", value: 45 },
    { name: "Tailwind", value: 30 },
  ],
  Backend: [
    { name: "PHP", value: 80 },
    { name: "Node.js", value: 65 },
    { name: "Python", value: 30 },
    { name: "Laravel", value: 30 },
    { name: "Java", value: 30 },
    { name: "C", value: 30 },
  ],
  Ferramentas: [
    { name: "MySQL", value: 80 },
    { name: "MongoDB", value: 45 },
    { name: "Postman", value: 45 },
    { name: "Linux", value: 67 },
    { name: "Electron", value: 95 },
  ],
};

const Linguagens = () => {
  return (
    <section className="skills">
      <div className="container">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Linguagens & Ferramentas</h2>

          {Object.entries(skills).map(([categoria, lista], i) => (
            <div key={i} className="skill-category">
              <div className="skill-category-header">
                <h3>{categoria}</h3>
              </div>
              <div className="skills-grid">
                {lista.map((skill, j) => (
                  <motion.div
                    className="skill-card"
                    key={j}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="fill"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <a href="https://github.com/friarthur"><button className="saiba-mais">Saiba mais</button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Linguagens;
