import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { _id, category_id, details, thumbnail_url, author, title, image_url } =
    news;
  return (
    <div>
      <Card.Body>
        <Card.Title className="my-3">{title}</Card.Title>
        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          All News from this Category{" "}
        </Link>
      </Card.Body>
      <div>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default News;
