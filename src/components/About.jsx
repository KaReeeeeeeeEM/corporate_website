import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/img1.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} alt="about-pic" />
          </Col>
          <Col sm={6}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt hic sed odio eos sint voluptatem vitae mollitia! Esse eum eius id neque repellendus quas, culpa possimus! Qui, quis? Est.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt!
            </p>
            <p>    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt hic sed odio eos sint voluptatem vitae mollitia! Esse eum eius id neque repellendus quas, culpa possimus! Qui, quis? Est.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae.
            </p>

            <div className="progress-block">
                <h4>HTML | CSS | JS</h4>
                <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
                <h4>Responsive</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
                <h4>Photoshop</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
