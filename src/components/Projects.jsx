import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import choco from "../assets/img/choco.png";
import toasty from "../assets/img/toasty.png";
import find from "../assets/img/find.png";
import house from "../assets/img/house.png";
import make from "../assets/img/make.png";
import portfolio from "../assets/img/portfolio.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chocolat'Inn",
      description: "Site vitrine pour une chocolaterie. #HTML #CSS #Javascript",
      imgUrl: choco,
    },
    {
      title: "Toasty Mood",
      description: "Application D'humeur journalière avec intégration d'une Api météo. #API #React #Javascript #CSS",
      imgUrl: toasty,
    },
    {
      title: "Find Your Dream",
      description: "Site  web pour trouver une destination de voyage réaliser lors d'un hackaton en 36h. #react #javascript #sass",
      imgUrl: find,
    },
    {
      title: "House of Cars",
      description: "Application réaliser lors d'un hackaton de 48h en partenariat avec la Wild Code School et AWS.",
      imgUrl: house,
    },
    {
      title: "MakeSense",
      description: "Site pour un projet 3 à la Wild Code School ",
      imgUrl: make,
    },
    {
      title: "Mon Portfolio",
      description: "Site où vous vous trouvez. #React #Javascript #Bootstrap #CSS",
      imgUrl: portfolio,
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>Voici les différents projets réaliser lors de ma formation à la Wild Code School et d'autres projets perso seront à venir, tous les liens des repos sont disponible sur mon gitHub.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Voici</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projets</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <h1>A venir ...</h1>
                        <ProjectCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h1>A venir ...</h1>                      
                          <ProjectCard />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
