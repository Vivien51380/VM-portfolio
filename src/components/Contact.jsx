import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import MonAvatar from "../assets/img/MonAvatar.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const [buttonText, setButtonText] = useState('Envoyer');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={MonAvatar} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contactez moi !</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input name="nom" type="text" placeholder="Nom" required />
                      {/* <input type="text" value={formDetails.firstName} placeholder="Nom" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> */}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input name="prenom" type="text" placeholder="Prénom" required />
                      {/* <input type="text" value={formDetails.lasttName} placeholder="Prénom" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> */}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input name="email" type="email" placeholder="Adresse mail" required />
                      {/* <input type="email" value={formDetails.email} placeholder="Adresse Mail" onChange={(e) => onFormUpdate('email', e.target.value)} /> */}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input name="tel" type="text" placeholder="Téléphone*" />
                      {/* <input type="tel" value={formDetails.phone} placeholder="Numéro de téléphone" onChange={(e) => onFormUpdate('phone', e.target.value)}/> */}
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea name="message" rows="6" placeholder="Message" required />
                      {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                      <button type="submit" value="send"><span>{buttonText}</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}