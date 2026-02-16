import { Container, Row, Col } from "react-bootstrap";
import "./testimonial.css";

import testi1 from "../assets/testi-thumb-1.jpg";
import testi2 from "../assets/testi-thumb-2.jpg";
import organicIcon from "../assets/testimonial-icon.png"

export default function Testimonial() {
  return (
    <section className="testimonial-section">

      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <p className="sub-title">What They’re Saying</p>
            <h2 className="main-title">
              What they’re talking
              <br />
              about our store
            </h2>
            <p className="desc">
              Lorem ipsum a little attention and energy will form the habit is
              simply free text.
            </p>

            <section className="organic-section">
              <Container>
                <Row>
                  <Col lg={6}>
                    <div className="organic-card">
                      <div className="organic-top">
                        <img
                          src={organicIcon}
                          alt="organic icon"
                          className="organic-icon"
                        />

                      </div>
                      <div>
                        <h2 className="organic-number">785,000</h2>
                        <p className="organic-subtitle">
                          Healthy & Pure Organic Products
                        </p>
                      </div>
                      <div className="organic-divider"></div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

          </Col>

          <Col lg={7}>
            <div className="cards-wrapper">
              <div className="testimonial-card">
                <div className="green-line"></div>
                <img src={testi2} className="profile-img" alt="" />
                <div className="stars">★★★★★</div>
                <h5>Aleesha Brown</h5>
                <span className="role">Co Founder</span>
                <hr />
                <p>
                  Promptitude is not only a duty, it is favorable to fortune,
                  reputation, influence, a little attention and energy will form
                  the habit.
                </p>
                <div className="quote">66</div>
              </div>

              <div className="testimonial-card">
                <div className="green-line"></div>
                <img src={testi1} className="profile-img" alt="" />
                <div className="stars">★★★★★</div>
                <h5>Jon D. William</h5>
                <span className="role">Co Founder</span>
                <hr />
                <p>
                  Promptitude is not only a duty, it is favorable to fortune,
                  reputation, influence, a little attention and energy will form
                  the habit.
                </p>
                <div className="quote">66</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
