import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import html5 from "../assets/img/html5.png";
import css from "../assets/img/css.png";
import java from "../assets/img/java.png";
import react1 from "../assets/img/react1.png";
import git from "../assets/img/git.png";
import fig from "../assets/img/fig.png";
import sql from "../assets/img/sql.png";
import equipe from "../assets/img/equipe.png";
import aide from "../assets/img/aide.png";
import communication from "../assets/img/communication.png";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Compétences</h2>
                        <p>Un petit aperçu de mes compétences techniques et de mes compétences douces</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={fig} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={equipe} alt="Image" />
                                <h5>Esprit d'équipe</h5>
                            </div>
                            <div className="item">
                                <img src={aide} alt="Image" />
                                <h5>Bienveillant</h5>
                            </div>
                            <div className="item">
                                <img src={communication} alt="Image" />
                                <h5>Communication</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
