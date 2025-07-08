
import "./Banner.css";


const Banner = () => {
  return (
    <div className="Banner">
      <img className="bg" src="/Banner.jpg" alt="Fundo" />
      <div className="text">
        <img className="profile" src="/Profile.png" alt="Perfil" />
        <h1>Arthur Reis Mendes</h1>
        <h2>Desenvolvedor Full-Stack PHP Junior</h2>
      </div>
    </div>
  );
};


export default Banner;
