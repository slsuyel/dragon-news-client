import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, category_id, details, thumbnail_url, author, title, image_url } =
    news;
  return (
    <Card className="mb-2">
      <Card.Header>Author Details is here</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <> {details.slice(0, 250)}...<Link to={`/news/${_id}`}>read More</Link> </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">View details is here</Card.Footer>
    </Card>
  );
};

export default NewsCard;
