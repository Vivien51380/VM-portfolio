import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moiAvatar from "../assets/img/moiAvatar.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from "../assets/img/cv.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer Front-End" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 3000);
    window.open(cv);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenue sur mon Portfolio</span>
                <h1>{`Bonjour ! Je m'appelle Vivien je suis`} <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Web Developer FrontEnd"," ]'><span className="wrap">{text}</span></span></h1>
                  <p>Je peux fournir un code propre et un design parfait. Je fais aussi des sites
                    de plus en plus interactif avec des animations web. Un design responsive qui rend votre site accessible à tous les
                    utilisateurs, quel que soit leur appareil.
                   </p>
                <button className="vvd" onClick={handleClick} disabled={downloading}><span>Mon CV</span></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="moiAvatar" src={moiAvatar} alt="moiAvatar"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

