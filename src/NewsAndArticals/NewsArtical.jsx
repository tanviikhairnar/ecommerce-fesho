import { Container, Row, Col } from "react-bootstrap";
import "./news-article.css";

import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";

const newsData = [
  {
    image: news1,
    title: "Which healthy food growth strategies required",
    desc: "Duis aute irure dolor ipsum simply free text the local markets."
  },
  {
    image: news2,
    title: "Which healthy food growth strategies required",
    desc: "Duis aute irure dolor ipsum simply free text the local markets."
  },
  {
    image: news3,
    title: "Which healthy food growth strategies required",
    desc: "Duis aute irure dolor ipsum simply free text the local markets."
  }
];

export default function NewsArticle() {
  return (
    <section className="fesho-news">
      <Container>
        <div className="text-center mb-5">
            <span className="section-subtitle">What We’re Offering</span>
            <h2 className="section-title">
              Latest news updates <br />& articles
            </h2>
          </div>
        <Row>
          {newsData.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="news-card">
               
                <div className="news-img">
                  <img src={item.image} alt="news" />
                  <div className="date-badge">
                    <span>20</span>
                    <small>AUG</small>
                  </div>
                </div>

                <div className="news-content">
                  <div className="meta">
                    <span><i class="bi bi-person"></i> by Admin /  <i class="bi bi-chat-heart"></i> 2 Comments</span>
                    
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>

                  <button className="read-more">READ MORE</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    
  );
}