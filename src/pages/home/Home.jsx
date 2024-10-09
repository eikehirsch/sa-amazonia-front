import Navbar from "../../components/navbar/Navbar";
import AccordionExpandIcon from "../../components/accordion/AccordionExpandIcon"

import "./Home.css"

const Home = () => {

  return (
    <div className="home-big-container">
      <Navbar />
      {/* PRIMEIRA SEÇÃO */}
      <div className="home-first-section-container">
        <div className="home-first-section-subcontainer">
          <h1 className="home-first-section-title">Protegendo o futuro, denunciando hoje.</h1>
          <p className="home-first-section-paragraph">Denunciar crimes ambientais é essencila para a preservação da natureza, proteção da biodiversidade, justiça ambiental e conscientização. A ação cidadã que garante um futuro sustentável para todos.</p>
          <button className="home-first-section-button">Faça uma denúncia agora.</button>
          <span className="home-first-section-span">Ajude-nos a proteger o meio.</span>
        </div>
        <div className="home-first-section-image-container">
          <img className="home-first-section-image" src="./first-section-landing-page.png" alt="" />
        </div>
      </div>
      {/* SEGUNDA SEÇÃO */}
      <div className="home-second-section-container">
        <div className="home-second-section-left-subcontainer">
          <h1 className="home-second-section-left-title">Por que denunciar crimes ambientais é fundamental ao planeta</h1>
          <p className="home-second-section-left-paragraph">Os crimes ambientais, como desmatamento e poluição, ameaçam habitats naturais e a diversidade de espécies. Denunciar essas práticas ajuda a preservar ecossistemas vitais. A degradação ambiental afeta diretamente a saúde das comunidades. Poluição do ar e da água pode causar doenças graves. A denúncia é uma ferramenta para proteger a saúde da população.</p>
        </div>
        <img className="home-second-section-image" src="./environmental-crimes.png" alt="" />
        <div className="home-second-section-right-subcontainer">
          <div className="home-second-section-right-item">
            <h1 className="home-second-section-right-item-title">68.635+</h1>
            <p className="home-second-section-right-item-paragraph">
              No mês de agosto o Brasil registrou o maior número de queimadas desde 2010
            </p>
          </div>
          <div className="home-second-section-right-item">
            <h1 className="home-second-section-right-item-title">144%</h1>
            <p className="home-second-section-right-item-paragraph">
              Aumento de queimadas em relação ao mesmo mês do ano anterior
            </p>
          </div>
          <div className="home-second-section-right-item">
            <h1 className="home-second-section-right-item-title">898,6 ha</h1>
            <p className="home-second-section-right-item-paragraph">
              A amazônia foi o bioma mais afetato pelas queimadas
            </p>
          </div>
        </div>
      </div>
      {/* TERCEIRA SEÇÃO */}
      <div className="home-third-section-container">
        <AccordionExpandIcon />
      </div>
    </div>
  )
}

export default Home