import { Card } from "react-bootstrap";

function CategoryCard({ title, img, color }) {
  return (
    <Card className={`category-card ${color}`}>
      <div className="image-wrapper">
        <img src={img} alt={title} />
      </div>

      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          When nothing prevents our to we like best be.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
