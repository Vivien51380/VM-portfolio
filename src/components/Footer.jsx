import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import git3 from '../assets/img/git3.svg';
// import VM from '../assets/img/VM.png';


export default function Footer() {

  const linkedinLink = "https://www.linkedin.com/in/mereauxvivien/";
  const gitLink = "https://github.com/Vivien51380";

  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
      {/* <Col size={12} sm={6}>
            <img src={VM} alt="Logo" />
          </Col> */}
        <Col size={12} sm={7} className="text-center text-sm-end">
          <div className="social-icon">
          <a target="_blank" rel="noreferrer" href={linkedinLink}><img src={navIcon1} alt="" /></a>
                <a target="_blank" rel="noreferrer" href={gitLink}><img src={git3} alt="" /></a>
          </div>
          <p>Copyright 2023. Vivien Méreaux All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};
