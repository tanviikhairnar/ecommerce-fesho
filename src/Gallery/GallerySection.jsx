import { Container } from "react-bootstrap";
import "./gallery.css";
import { BsInstagram } from "react-icons/bs";

import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";
import g6 from "../assets/gallery-6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

function GallerySection() {
  return (
    <section className="gallery-section ">
      <Container fluid>
        <div className="slider">
          <div className="slide-track">
            {[...images, ...images].map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt="gallery" />
                <div className="overlay">
                  <BsInstagram />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GallerySection;


